import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: [/.+@.+\..+/, "Please enter a valid email address"],
  },
  description: {
    type: String,
    default: "",
  },
  weblinks: {
    linkedIn: {
      type: String,
      default: "",
    },
    github: {
      type: String,
      default: "",
    },
    facebook: {
      type: String,
      default: "",
    },
    twitter: {
      type: String,
      default: "",
    },
    instagram: {
      type: String,
      default: "",
    },
    website: {
      type: String,
      default: "",
    },
  },
  password: {
    type: String,
    required: true,
  },
  interestes: {
    type: [String],
    default: [],
  },
  education: {
    type: String,
    default: "",
  },
  job: {
    type: String,
    default: "",
  },
  followers: {
    type: [Schema.Types.ObjectId],
    default: [],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const user = mongoose.model("user", userSchema);
export default user;
