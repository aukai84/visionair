const express = require('express');
const router = express.Router();

const Item = require('../../models/item');

//get complete list of items
router.get('/', function(req, res, next) {
    Item.find(function(err, items){
        res.send(items);
    });
});






module.exports = router;