import mongoose from "mongoose";

function connectToMongo(mongoURI) {
  mongoose
    .connect(mongoURI)
    .then(() => {
      console.log("Connected to mongoDB");
    })
    .catch((err) => console.log(err));
}

export default connectToMongo;
