const mongoose = require("mongoose");

const uri = "mongodb://localhost:27017/bark";
var connect = false;
export const dbConnect = async () => {
  if (connect) {
    return;
  } else {
    await mongoose
      .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log("Connected to MongoDB"))
      .catch((err) => console.error("Could not connect to MongoDB", err));
    return;
  }
};
