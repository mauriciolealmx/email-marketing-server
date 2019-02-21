const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  // Google strategy gets registered as 'google'.
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      // The user will be sent to this URL after granting permission.
      callbackURL: '/auth/google/callback',
      // Make sure Heroku proxy is trusted and maintain https.
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });

      if (existingUser) {
        // we already haeve a record.
        return done(null, existingUser);
      }

      // No record
      const user = await new User({ googleId: profile.id }).save();
      done(null, user);
    }
  )
);
