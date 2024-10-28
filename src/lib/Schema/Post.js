const mongoose = require("mongoose");
const { Schema } = mongoose;

var Post = new Schema({
  email: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
  urgent: {
    type: Boolean,
    default: false,
  },
  field: {
    type: String,
    require: true,
  },
  details: {
    type: [String],
    require: true,
  },
  Date: {
    type: String,
    require: true,
  },
  nationWide: {
    type: Boolean,
    require: true,
  },
});

const postModel = mongoose.models.Post || mongoose.model("Post", Post);
export default postModel;
