import express from "express";
import User from "../models/User.js";
import { body, validationResult } from "express-validator";
import * as bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import fetchUser from "../middleware/fetchUser.js";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET;

//ROUTE 1: Register new user at /api/register, No auth required
router.post(
  "/register",
  [
    body("firstname", "Enter a valid First Name").isLength({ min: 3 }),
    body("lastname", "Enter valid last name").isLength({ min: 3 }),
    body("email", "Enter valid email").isEmail(),
    body("password", "Password should be atleast 8 charachters long").isLength({
      min: 8,
    }),
  ],
  async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }
    try {
      //check if user with same email already exists
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res.status(400).json({
          message: "User with same email alerady exists",
          success,
        });
      }
      //generating hash for password
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);

      //create new user
      user = await User.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: secPass,
      });

      const data = {
        user: {
          id: user.id,
        },
      };
      const jwtData = jwt.sign(data, JWT_SECRET);
      res.status(200).json({ token: jwtData, success: true });
    } catch (err) {
      res.status(500).json({ message: "Some error occured", success });
    }
  }
);

//ROUTE 2: Login user at /api/login,auth reuired
router.post(
  "/login",
  [
    body("email", "Enter valid email").isEmail(),
    body("password", "Password can not be blank").exists(),
  ],
  async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: errors.array(),
        success,
      });
    }
    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        success = false;
        return res
          .status(400)
          .json({ message: "User does not exist", success });
      }
      const passCompare = await bcrypt.compare(password, user.password);
      if (!passCompare) {
        success = false;
        return res
          .status(400)
          .json({ message: "Credentials do not match", success });
      }
      const payload = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(payload, JWT_SECRET);
      success = true;
      res.json({ success, authToken });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Internal Server error", success: false });
    }
  }
);

//Route 3: Get user details from JWT ,auth required
router.post("/getUser", fetchUser, async (req, res) => {
  try {
    let userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
  } catch (error) {
    res.status(400).send("Internal Server error");
  }
});
//ROUTE 4: Update user details
router.put("/updateUser", fetchUser, async (req, res) => {
  let success = false;
  const {
    firstname,
    lastname,
    description,
    weblinks,
    intesets,
    education,
    job,
  } = req.body;
  const updatedUser = {};
  if (firstname) {
    updatedUser.firstname = firstname;
  }
  if (lastname) {
    updatedUser.lastname = lastname;
  }
  if (description) {
    updatedUser.description = description;
  }
  if (weblinks) {
    updatedUser.weblinks = weblinks;
  }
  if (intesets) {
    updatedUser.intesets = intesets;
  }
  if (education) {
    updatedUser.education = education;
  }
  if (job) {
    updatedUser.job = job;
  }
  let user = await User.findById(req.user.id).select("-password");
  if (!user) {
    return res.status(401).json({ message: "User not found", success });
  }
  user = await User.findByIdAndUpdate(
    req.user.id,
    { $set: updatedUser },
    { new: true }
  );
  res.send(user);
});
export default router;
