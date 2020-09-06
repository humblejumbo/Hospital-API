const express = require("express");
const router = express.Router();
const doctorControllers= require('../../../controllers/api/v1/doctors_api')

//DOCTOR REGISTER AND LOGIN ROUTES
router.post('/register',doctorControllers.doctorRegister);
router.post('/login',doctorControllers.doctorLogin);

module.exports = router;
