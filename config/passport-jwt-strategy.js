const passport = require("passport");
const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;
const dotenv = require('dotenv');

dotenv.config();

const Doctor = require("../models/doctors");

let opts = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.secretKey,
};

passport.use(
  new JWTStrategy(opts, function (jwtPayload, done) {
    Doctor.findById(jwtPayload._id, function (err, doctor) {
      if (err) {
        console.log(err);
        return done(err);
      }

      if (doctor) return done(null, doctor);
      else return done(null, false);
    });
  })
);

module.exports = passport;
