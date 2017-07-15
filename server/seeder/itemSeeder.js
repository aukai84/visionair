/*itemSchema
    imagePath: {type: String, required: true},
    title: {type: String, required: true},
    location: {type: String, required: true},
    inventory: {type: Number, required: true},
    price: {type: Number, required: true}
})*/

const Item = require('../models/item');

const mongoose = require('mongoose');
mongoose.connect('localhost:27017/visionair');

const items = [
    new Item({
        imagePath: 'http://source.unsplash.com/i7hULbsIiQo',
        title: 'Beachy stuff',
        location: 'Oahu, Hawaii',
        inventory: 10,
        price: 250
    }),
    new Item({
        imagePath: 'http://source.unsplash.com/JSv9uK-9ZUg',
        title: 'Beachy stuff',
        location: 'Oahu, Hawaii',
        inventory: 8,
        price: 100
    }),
    new Item({
        imagePath: 'http://source.unsplash.com/D_yGyGmk60w',
        title: 'Beachy stuff',
        location: 'Oahu, Hawaii',
        inventory: 20,
        price: 300
    }),
    new Item({
        imagePath: 'http://source.unsplash.com/j5QK3ZDRa-s',
        title: 'Beachy stuff',
        location: 'Oahu, Hawaii',
        inventory: 3,
        price: 140
    }),
    new Item({
        imagePath: 'http://source.unsplash.com/PLxJw-Z817I',
        title: 'Beachy stuff',
        location: 'Oahu, Hawaii',
        inventory: 23,
        price: 70
    }),
    new Item({
        imagePath: 'http://source.unsplash.com/t24k04BJAWg',
        title: 'Beachy stuff',
        location: 'Oahu, Hawaii',
        inventory: 10,
        price: 500
    })
];

for (var i = 0; i < items.length; i++) {
    items[i].save(function(err, result) {
        if (err) { console.log(err); }
    });

    if (i == items.length - 1) {
        mongoose.disconnect();
    }
}