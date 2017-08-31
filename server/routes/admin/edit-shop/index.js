const express = require('express');
const router = express.Router();
const multer = require('multer');
const Item = require('../../../models/item'); 

const fileFilter = function(req, file, cb) {
    if(file.mimetype === 'image/*'){
        cb(null, false)
    } else {
        cb(null, true)
    }
}

const upload = multer({
    dest:'../client/static/images',
    limits: {
        fieldSize: '20mb', 
        fileSize: '20mb'
    },
    fileFilter
});

const photosUpload = upload.fields([
    {name: 'fullImage', maxCount: 1},
    {name: 'thumbnail', maxCount: 1}
])

router.get('/', function(req, res, next) {
    res.send({ message: "congrats you are able to edit the shop", directory: __dirname});
});

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

//upload both thumbnail and full image through multer middleware.  Send names back to client to store file path into db
router.post('/upload-item', photosUpload, function(req, res, next){

    res.send({fullImageName: req.files.fullImage[0].filename, thumbnailName: req.files.thumbnail[0].filename})

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
