const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const userSchema = new Schema({
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true}
});

//on-save Hook to encrypt password...
userSchema.pre('save', function(next) {
    const user = this;

    //generate a salt
    bcrypt.genSalt(10, function(err, salt){
        if(err){
            console.log(err);
            return next(err);
        }
        //hash the password using the salt
        bcrypt.hash(user.password, salt, null, function(err, hash){
            if(err){
                console.log(err);
                return next(err);
            }
            //save the hashed password
            user.password = hash;
            next();
        });
    });
});

//returns isMatch as a flag that passwords were match. if !isMatch then password was incorrect.
userSchema.methods.comparePassword = function(candidatePassword, callback){
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch){
        if(err){
            return callback(err);
        }
        callback(null, isMatch);
    });
};


module.exports = mongoose.model('user', userSchema);

