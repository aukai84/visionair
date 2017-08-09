const express = require('express');
const router = express.Router();

const Item = require('../../models/item');
const Cart = require('../../models/cart');

//get complete list of items
router.get('/', function(req, res, next) {
    Item.find(function(err, items) {
        res.json(items);
    });
});

router.get('/item/:id', function(req, res, next) {
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

router.get('/view-cart', function(req, res, next) {
    let cart = new Cart(req.session.cart ? req.session.cart : {});
    res.send(cart);
});

//pass item id in route.
//pass selectedOptions as json on req object as {selectedOptions: { option: "small acrylic", cost: 100}};
router.post('/addItem/:id', function(req, res, next) {
    let id = req.params.id;
    let selectedOptions = req.body.selectedOptions;
    let cart = new Cart(req.session.cart ? req.session.cart : {});

    Item.findById(id, function(err, item) {
        if (err) {
            return res.send(err);
        } else {
            if (item.inventory <= 0) {
                res.send({ message: 'sorry item is sold out.' });
            } else {
                cart.addItem(item, selectedOptions);
                req.session.cart = cart;


                res.send(cart);
            }
        }
    });
});

router.post('/removeItem/:id', function(req, res, next) {
    let id = req.params.id;
    if (req.session.cart != null) {
        let cart = new Cart(req.session.cart);
        cart.removeItem(id);
        req.session.cart = cart;
        res.send('removeItem successful.');
    } else {
        res.send('cart is empty at removeItem route.');
    }
});


//remove a specific buyingOption on a specific Item from the cart.
//pass in the item id, pass in the options index (starting at zero) for the option to be removed. 
//cart function will update cart totalQty and totalPrice. 
router.post('/removeOptionFromItem/:id/:index', function(req, res, next) {
    let id = req.params.id;
    let index = req.params.index;

    if (req.session.cart != null) {
        let cart = new Cart(req.session.cart);
        cart.removeOptionFromItem(id, index);
        req.session.cart = cart;

        res.send('Option at index ' + index + ' removed from cart item.');
    } else {
        res.send('Cart is empty at removeOptionFromItem route.');
    }
});





module.exports = router;