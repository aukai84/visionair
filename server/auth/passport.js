const passport = require('passport');
const User = require('../models/user');
const localStrategy = require('passport-local');

//const localOptions = {username}
const localLogin = new localStrategy(function(username, password, done){

    //verify username, compare password, call done if credentials pass.
    //find username in db
    User.findOne({ username: username}, function(err, user){
        if(err){
            return done(err);
        }

        if(!user){
            return done(null, false);
        }

        user.comparePassword(password, function(err, isMatch){
            if(err){
                return done(err);
            }
            if(!isMatch){
                return done(null, false);
            }
            return done(null, user);
        });
    });
});


passport.use(localLogin);