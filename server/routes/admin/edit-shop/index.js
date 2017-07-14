const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next){
    res.send({message:"congrats you are an authenticated admin."});
});

router.get('/test', function(req, res, next){
    res.send({message:"this is a test route, this message confirms you are authenticated."});
})

//add a new item to the db
router.post('/new-item', function(req, res, next){

});

//delete an item by id
router.delete('/:id', function(req, res, next){

});

//update an item, place all fields on the request body.
router.put('/:id', function(req, res, next){

});


module.exports = router;
