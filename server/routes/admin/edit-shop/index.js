const express = require('express');
const router = express.Router();
const Item  = require('../../../models/item');

router.get('/', function(req, res, next){
    res.send({message:"congrats you are able to edit the shop"});
});

router.get('/test/:id', function(req, res, next){
    res.send(req.params.id);
})

//add a new item to the db, depends on item structure to build. 
router.post('/new-item', function(req, res, next){

});


router.delete('/delete/:id', function(req, res, next){
    const id = req.params.id;

    Item.findByIdAndRemove(id, function(err, item){
        if(err){
            res.send(err);
        }
        else {
            res.send({message:"delete successful."});
        }
    }); 
});

//update an item, place all fields on the request body.
//depends on item structure to build...
router.put('/update/:id', function(req, res, next){

});


module.exports = router;
