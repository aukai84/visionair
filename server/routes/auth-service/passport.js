const passport = require('passport');
const User = require('../../models/user');
const localStrategy = require('passport-local');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const config = require('../../config');


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

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: config.secret
}


//adminStrategy checks JWT for the admin: true flag.
const AdminStrategy = new JwtStrategy(jwtOptions, function(payload, done) {
    User.findById(payload.sub, function(err, user){
        if(err){
            return done(err, false);
        }
        if(user){
            if(payload.admin){
                done(null, user);
            }
            done(null, false, {message: 'you are not the admin.'});
        }
        else {
            done(null, false);
        }
    });
});

//Other user strategy only needs to authenticate the payload.sub if(user) then done(null, user)

passport.use(localLogin);
passport.use(AdminStrategy);