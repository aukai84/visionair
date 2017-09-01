const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.send('VisionAir is up in the clouds, welcome home');
});

/**Add routes for Social Media Tracking..
 *They should be unique routes for each image that pass through visionair.com/######,
 *record the link visit,
 *pass the user to the shop item with corresponding ###### to id, OR to the main SHOP.
 *unique links are stored in analytics to track which link users followed.
 */

router.use('/shop', require('./shop'));
router.use('/admin', require('./admin'));
router.use('/mailer', require('./mailer'));


module.exports = router;
