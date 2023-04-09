import express, { json } from "express";
import connectToMongo from "./db.js";
import cors from "cors";
import dotenv from "dotenv";
import auth from "./routes/auth.js";

dotenv.config();
const mongoURI = process.env.MONGO_URI;
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
