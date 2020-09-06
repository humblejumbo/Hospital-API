const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },

    phone: {
      type: Number,
      min: 10000,
      max: 99999,
      required: true
    },

    age:{
        type:Number,
        required: true
    },

    gender:
    {
        type:String,
        enum:['MALE','FEMALE'],
        required:true
    },

    reports:
    [{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Report'
    }]
},
{
    timestamps: true,

});

module.exports = mongoose.model("Patient", patientSchema);
