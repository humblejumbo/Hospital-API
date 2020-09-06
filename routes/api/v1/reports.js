const express = require("express");
const passport = require('passport');

const router = express.Router();
const reportControllers = require("../../../controllers/api/v1/reports_api");

//PATIENT ROUTES AND ALL ARE PROTECTED..(ONLY DOCTORS CAN ACCESS THESE ROUTES)
router.get('/:status',passport.authenticate('jwt',{session:false}),reportControllers.reportsByStatus);

module.exports = router;
