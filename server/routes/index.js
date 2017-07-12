var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('VisionAir is up in the clouds, welcome home');
});

router.use('/shop', require('./shop'));


module.exports = router;
