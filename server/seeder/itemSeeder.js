/*itemSchema
    imagePath: {type: String, required: true},
    title: {type: String, required: true},
    location: {type: String, required: true},
    inventory: {type: Number, required: true},
    price: {type: Number, required: true},
    scaling: {type: Number, required: true}
})*/

const Item = require('../models/item');

const mongoose = require('mongoose');
mongoose.connect('localhost:27017/visionair');

const items = [
    new Item({
        imagePath: 'http://source.unsplash.com/i7hULbsIiQo',
        title: 'Keegan\'s stuff',
        location: 'Oahu, Hawaii',
        inventory: 100,
        price: 2500,
        scaling: 5,
        options: [{
                size: 'small',
                cost: 0
            },
            {
                size: 'medium',
                cost: 50
            },
            {
                size: 'large',
                cost: 100
            }
        ]
    }),
    new Item({
        imagePath: 'http://source.unsplash.com/JSv9uK-9ZUg',
        title: 'Beachy stuff',
        location: 'Oahu, Hawaii',
        inventory: 8,
        price: 100,
        scaling: 5,
        options: [{
                size: 'small',
                cost: 0
            },
            {
                size: 'medium',
                cost: 50
            },
            {
                size: 'large',
                cost: 100
            }
        ]
    }),
    new Item({
        imagePath: 'http://source.unsplash.com/D_yGyGmk60w',
        title: 'Beachy stuff',
        location: 'Oahu, Hawaii',
        inventory: 20,
        price: 300,
        scaling: 5,
        options: [{
                size: 'small',
                cost: 0
            },
            {
                size: 'medium',
                cost: 50
            },
            {
                size: 'large',
                cost: 100
            }
        ]
    }),
    new Item({
        imagePath: 'http://source.unsplash.com/j5QK3ZDRa-s',
        title: 'Beachy stuff',
        location: 'Oahu, Hawaii',
        inventory: 3,
        price: 140,
        scaling: 5,
        options: [{
                size: 'small',
                cost: 0
            },
            {
                size: 'medium',
                cost: 50
            },
            {
                size: 'large',
                cost: 100
            }
        ]
    }),
    new Item({
        imagePath: 'http://source.unsplash.com/PLxJw-Z817I',
        title: 'Beachy stuff',
        location: 'Oahu, Hawaii',
        inventory: 23,
        price: 70,
        scaling: 5,
        options: [{
                size: 'small',
                cost: 0
            },
            {
                size: 'medium',
                cost: 50
            },
            {
                size: 'large',
                cost: 100
            }
        ]
    }),
    new Item({
        imagePath: 'http://source.unsplash.com/t24k04BJAWg',
        title: 'Beachy stuff',
        location: 'Oahu, Hawaii',
        inventory: 10,
        price: 500,
        scaling: 5,
        options: [{
                size: 'small',
                cost: 0
            },
            {
                size: 'medium',
                cost: 50
            },
            {
                size: 'large',
                cost: 100
            }
        ]
    })
];

for (var i = 0; i < items.length; i++) {
    items[i].save(function(err, result) {
        if (err) { console.log(err); }
    });

    if (i == items.length - 1) {
        console.log("Seed successful.");
        mongoose.disconnect();
    }
}