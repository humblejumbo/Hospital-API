const Patient = require("../../../models/patients");

//PATIENT REGISTER ACTION..IF THE PATIENT IS ALREADY REGISTERED THEN DISPLAY HIS INFORMATION
module.exports.patientRegister= async function(req,res)
{
    try{
      if ( req.body.phone == undefined || req.body.name == undefined || req.body.age == undefined || req.body.gender == undefined ) {
        return res.status(206).json({
          message: "Incomplete data provided",
        });
      }

      let patient = await Patient.findOne({ phone: req.body.phone })

      if (!patient) {
        let newPatient = await Patient.create(req.body);

        return res.status(201).json({
          message: "Patient registered sucessfully",
          data:{
            patient: newPatient
          }
        });

      } else {
        return res.status(200).json({
          message: "Patient is already registered.",
          data:{
            patient: patient
          } 
        });
      }
    }
    catch(error)
    {
      console.log("Error Found:", error);
      return res.json(500, {
        message: "Internal Server Error",
      });
    }  

}