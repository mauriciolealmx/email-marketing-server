const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

passport.use(
  // Google strategy gets registered as 'google'.
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      // The user will be sent to this URL after granting permission.
      callbackURL: '/auth/google/callback',
    },
    accessToken => {
      console.log(accessToken);
    }
  )
);