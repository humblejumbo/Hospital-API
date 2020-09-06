const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema(
  {

    doctor:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Doctor',
    },

    patient:
    {
      type:mongoose.Schema.Types.ObjectId,
      ref: 'Patient'
    },

    status:
    {
        type: String,
        //USING ENUM, STATUS CAN HAVE ONLY THESE VALUES..IF ANY OTHER IS GIVEN THEN IT WILL GIVE VALIDATION ERROR.
        enum:['NEGATIVE','TRAVELLED-QUARANTINE','SYMPTOMS-QUARANTINE','POSITIVE-ADMIT'],
        required: true
    }    
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Report", reportSchema);