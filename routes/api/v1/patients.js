const express = require("express");
const passport = require('passport');

const router = express.Router();
const patientControllers = require("../../../controllers/api/v1/patients_api");
const reportControllers = require("../../../controllers/api/v1/reports_api");


//PATIENT ROUTES AND ALL ARE PROTECTED..(ONLY DOCTORS CAN ACCESS THESE ROUTES)
//putting session to false will disable the generation of session cookies.
router.post("/register",passport.authenticate('jwt',{session:false}), patientControllers.patientRegister);
router.post("/:id/create_report",passport.authenticate('jwt',{session:false}), reportControllers.createReport);
router.get("/:id/all_reports", passport.authenticate('jwt',{session:false}),reportControllers.findAllReports );

module.exports = router;
