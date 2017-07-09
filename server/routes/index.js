const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.send('VisionAir is up in the clouds, welcome home');
});

router.use('/shop', require('./shop'));
router.use('/admin', require('./admin'));


module.exports = router;