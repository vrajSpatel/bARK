const mongoose = require("mongoose");

const uri = "mongodb://localhost:27017/bark";

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 20000,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));
