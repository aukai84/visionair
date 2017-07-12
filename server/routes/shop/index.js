const express = require('express');
const router = express.Router();

const Item = require('../../models/item');

//get complete list of items
router.get('/', function(req, res, next) {
    Item.find(function(err, items){
        res.json(items);
    });
});

/* Not needed if handling on client
get shop-item by ID
router.get('/item/:id', function(req, res, next) {
    let id = req.params.id;
    
    Item.findById(id, function(err, items){
        if(err) {}

    });
});*/







module.exports = router;
