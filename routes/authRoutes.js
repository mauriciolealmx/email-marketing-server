const passport = require('passport');

// Passport implementation @ 'services/passport'
module.exports = app => {
  app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

  app.get('/auth/google/callback', passport.authenticate('google'));
};
