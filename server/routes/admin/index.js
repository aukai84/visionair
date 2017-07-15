const express = require('express');
const router = express.Router();
const passportService = require('../auth-service/passport');
const passport = require('passport');
const jwt = require('jwt-simple');
const config = require('../../config');


//sign in user via passport local strategy
const signInUser = passport.authenticate('local', { session: false });
const authenticatedAdmin = passport.authenticate('jwt', { session: false});
//admin signin
//should check users credentials
//if PASS then create jwt token on res. 
router.post('/signin', signInUser,  function(req, res, next) {
    const timestamp = new Date().getTime();
    
    const token = jwt.encode({sub: req.user.id, iat: timestamp, admin:true }, config.secret);
    res.send({token: token});

});

//call this route to make sure the admin is authenticated. Client will then load the editable shop.
/*router.get('/edit-shop', authenticatedAdmin, function(req, res, next){
    res.send({message: 'congrats, you are an authenticated admin.'});
});*/

router.get('/', authenticatedAdmin, function(req, res, next){
    res.send({message: "Congrats you are an authenticated admin."});
});

router.use('/edit-shop', authenticatedAdmin, require('./edit-shop'));

//admin protected routes on the client will need to implement auth check with same token scheme generated on signin.
//admin protected route to send client profile information
router.get('/', authenticatedAdmin, (req, res, next) => {
    res.json({profile: "dickbutt"})
})

module.exports = router;
