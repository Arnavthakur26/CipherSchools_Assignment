import express, { json } from "express";
import connectToMongo from "./db.js";
import cors from "cors";
import dotenv from "dotenv";
import auth from "./routes/auth.js";

dotenv.config();
// const mongoURI = process.env.MONGO_URI;
const mongoURI =
  "mongodb+srv://tarnav206:rl7GmYFYPZPsFPyL@cluster0.mqv6mko.mongodb.net/?retryWrites=true&w=majority";
connectToMongo(mongoURI);
const app = express();

app.use(cors());
app.use(express.json());

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/api/auth", auth);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
