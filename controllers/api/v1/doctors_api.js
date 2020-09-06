const Doctor = require("../../../models/doctors");
const jwt = require("jsonwebtoken");
const dotenv= require('dotenv');

dotenv.config();

//DOCTOR REGISTER ACTION
module.exports.doctorRegister = async function (req, res) {      

    try
    {
        let doctor = await Doctor.findOne({ username: req.body.username });

        if (!doctor) {
            let doctor=await Doctor.create(req.body);

            //converts the document to javascript object,trying to prevent password to be returned in json response
            doctor = doctor.toObject();
            delete doctor.password;

            return res.json(201,{
                message:"Doctor registered sucessfully.",
                data:{
                  doctor: doctor
                }
            });

        }         
        else {
          doctor = doctor.toObject();
          delete doctor.password;  

            return res.json(409,{
                message:"Doctor with this username already exists.",
                data:{
                  doctor: doctor
                }
            });
        }
    }
    catch(error)
    {
        console.log("Error Found:", error);
        return res.json(500,{
            message:"Internal Server Error"
        });
    }  
            
}

//DOCTOR LOGIN ACTION
module.exports.doctorLogin = async function (req, res) {
  try {
    let doctor = await Doctor.findOne({ username: req.body.username });

    if (!doctor || doctor.password != req.body.password) {
      return res.json(401, {
        message: "Invalid Username or password",
      });
    }

    return res.status(200).json( {
      message: "Signed in successfully,tokens are generated",
      data: {
        //converting doctor to json, there is secret key for decryption and expiry time is 1hr.
        token: jwt.sign(doctor.toJSON(), process.env.secretKey , { expiresIn: "3600000" }),
      },
    });
  } catch (error) {
    console.log("Error Found:", error);
    return res.json(500, {
      message: "Internal Server Error",
    });
  }
};


