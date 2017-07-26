const express = require('express');
const router = express.Router();

const Item = require('../../models/item');

//get complete list of items
router.get('/', function(req, res, next) {
    Item.find(function(err, items) {
        res.json(items);
    });
});

router.get('/:id', function(req, res, next) {
    let id = req.params.id;
    Item.findById(id, function(err, item) {
        if (err) {
            res.send(err);
        } else {
            res.send({
                message: `This is the product page for item ${item._id}`,
                item
            });
        }
    });
});






module.exports = router;