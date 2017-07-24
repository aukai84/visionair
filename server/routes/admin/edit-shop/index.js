const express = require('express');
const router = express.Router();
const multer = require('multer');
const Item = require('../../../models/item'); 
const upload = multer({dest:'../client/static/images', limits: {
    fieldSize: '50mb', fileSize: '50mb'
}})

router.get('/', function(req, res, next) {
    res.send({ message: "congrats you are able to edit the shop", directory: __dirname});
});

router.get('/test/:id', function(req, res, next) {
    res.send(req.params.id);
})

//add a new item to the db, req.body should be of the form:
/*{
        "imagePath": "http://source.unsplash.com/i7hULbsIiQo",
        "title": "Keegan's stuff",
        "location": "Oahu, Hawaii",
        "inventory": 100,
        "price": 2500
    }
    */

//use the response object to update the store on the front end so the admin can immediately see their new item in the store w/o refreshing the store.
router.post('/new-item', function(req, res, next) {
    const newItem = new Item(req.body);

    newItem.save(function(err, createdItem) {
        if (err) {
            res.send(err);
        } else {
            res.send({ message: 'new item created!', createdItem: createdItem });
        }
    });
});

router.post('/upload-item', upload.single('file'), function(req, res, next){
    console.log(req.file)
    res.send({file: req.file})
})
//use the response object to immediately remove the item from the store so the admin sees the update w/o refresh.
router.delete('/delete/:id', function(req, res, next) {
    let id = req.params.id;

    Item.findByIdAndRemove(id, function(err, item) {
        if (err) {
            res.send(err);
        } else {
            res.send({ message: "delete successful.", item: item });
        }
   }); 
});

//update an item, place all fields on the request body.
//use the response object to immediately update the item in the store so the admin sees the update w/o refresh.
router.put('/update/:id', function(req, res, next) {
    let id = req.params.id;
    Item.findById(id, function(err, item) {
        if (err) {
            res.send(err);
        } else {
            item.imagePath = req.body.imagePath;
            item.title = req.body.title;
            item.location = req.body.location || item.location;
            item.inventory = req.body.inventory || item.inventory;
            item.price = req.body.price || item.price;

            item.save(function(err, item) {
                if (err) {
                    res.send(err);
                } else {
                    res.send({ message: 'update successful!', item: item });
                }
            });
        }
    });
});


module.exports = router;
