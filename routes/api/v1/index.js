const express = require("express");
const doctorRoutes = require("./doctors");
const patientRoutes = require("./patients");
const reportRoutes = require('./reports');

const router = express.Router();

router.use("/doctors", doctorRoutes);
router.use("/patients", patientRoutes);
router.use('/reports', reportRoutes);

module.exports = router;
