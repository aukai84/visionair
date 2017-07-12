const express = require('express');
const router = express.Router();

const Item = require('../../models/item');

//get all items
router.get('/', function(req, res, next) {
    Item.find(function(err, items){
        res.json(items);
    });
});

router.get('/')





module.exports = router;
