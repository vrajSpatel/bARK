const mongoose = require("mongoose");
const { Schema } = mongoose;

const professionaluserSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  service: {
    type: String,
    require: true,
  },
  area: {
    nationwide: {
      type: Boolean,
      require: true,
    },
    pincode: {
      type: Number,
    },
    radius: {
      type: Number,
    },
  },
  companyName: String,
  email: {
    type: String,
    require: true,
  },
  tellNumber: {
    type: String,
    require: true,
  },
  website: {
    link: {
      type: String,
    },
    exist: {
      type: Boolean,
      require: true,
    },
  },
  company: {
    size: {
      type: String,
      require: true,
    },
    salesTeam: Boolean,
    socialMedia: Boolean,
  },
  profileImage: {
    type: String,
  },
});

const ProfessionalUser =
  mongoose.models.ProfessionalUser ||
  mongoose.model("ProfessionalUser", professionaluserSchema);
export default ProfessionalUser;
