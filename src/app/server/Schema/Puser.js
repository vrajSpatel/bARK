const mongoose = require('mongoose');
const { Schema } = mongoose;

const professionaluserSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  service: {
    type: String,
    require: true
  },

  area: {
    naitonwide: {
      type: Boolean,
      require: true
    },
    pincode :{
      type : String,
      default :null
    },
    radius : {
      type : Number,
      default : null
    }
  },

  companyName:String,

  email : {
    type : String,
    require : true
  },

  tellNumber:{
    type : String,
    require : true
  },

  website : {
    link:{
      type : String
    },
    exsist : {
      type : Boolean,
      require : true
    }
  },

  company: {
    size : {
      type : String,
      require : true
    },
    salesTeam : Boolean,
    socialMedia : Boolean
  },

  

});

const User = mongoose.model('PUser', professionaluserSchema);