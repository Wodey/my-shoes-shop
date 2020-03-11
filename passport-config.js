const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/user');

passport.use(new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password'
  },
  function(username, password, done) {
    User.findOne({email: username}).then((err, user) => {
      if(err) return done(err);
      if(!user) return done(null, false, {message: 'Incorrect email'})
      if(!user.validatePassword(password)) return done(null, false, {message: 'Incorrect password'});
      return done(null, user);
    });
  }
));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findOne({id: id}, function(err, user) {
    done(err, user);
  });
});
