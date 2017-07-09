const User = require('../models/user');

const mongoose = require('mongoose');
mongoose.connect('localhost:27017/visionair');

const user = new User({
    username: 'dickbutt',
    password: 'clearskies123!'
});

user.save(function(err, result){
    if(err) {
        console.log(err);
        return next(err);
    }
    console.log('save successful');
    mongoose.disconnect();
});
