const mongoose = require("mongoose");
const { Schema } = mongoose;

var Authentication = new Schema({
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

const SigninModel =
  mongoose.models.Authentication ||
  mongoose.model("Authentication", Authentication);
export default SigninModel;
