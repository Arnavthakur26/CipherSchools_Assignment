import mongoose from "mongoose";

async function connectToMongo(mongoURI) {
  await mongoose
    .connect(mongoURI, { useNewUrlParser: true })
    .then(() => {
      console.log("Connected to mongoDB");
    })
    .catch((err) => console.log(err));
}

export default connectToMongo;
