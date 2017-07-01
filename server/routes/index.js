var express = require('express');
var router = express.Router();

router.get('/', function(req,res,next) {
    res.send('VisionAir is up in the clouds');
});



module.exports = router;