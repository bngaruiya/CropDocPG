const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const passport = require('passport');
const { User } = require('../models');

const passportJWTOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
};

const strategy = new JwtStrategy(passportJWTOptions, (payload, done) => {
  User.findOne({ where: { id: payload.sub } })
    .then((user) => {
      if (user) {
        return done(null, user);
      }
      return done(null, false);
    })
    .catch((err) => done(err, null));
});

// eslint-disable-next-line no-shadow
module.exports = (passport) => {
  passport.use(strategy);
};
