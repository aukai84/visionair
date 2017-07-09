const express = require('express');
const router = express.Router();
const passportService = require('../../auth/passport');
const passport = require('passport');
const jwt = require('jwt-simple');
const config = require('../../../config');


//sign in user via passport local strategy
const signInUser = passport.authenticate('local', { session: false });

//admin signin
//should check users credentials
//if PASS then create jwt token on res. 
router.post('/signin', signInUser,  function(req, res, next) {
    const timestamp = new Date().getTime();
    const token = jwt.encode({ sub: req.user.id, iat: timestamp }, config.secret);

    res.send({token: token});

});

//admin protected routes on the client will need to implement auth check with same token scheme generated on signin.


module.exports = router;