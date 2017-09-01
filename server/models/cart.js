const mongoose = require('mongoose');
const Item = require('./item');


/**
 *EXAMPLE CART:
   "items": {
        "59784e6fa4928e6cabb42d16": { 
            "title": "Beachy stuff",
            "totalPrice": 600,
            "totalQty": 2,
            "options": [
                {
                    "size": "large",
                    "material": "metal",
                    "cost": "50",
                    "optionQty": 2
                },..more options could follow
        },...more items could follow
    }
 */

/**
 * Cart is a function that takes an old cart and replaces the values as they are updated.
 * oldCart should come from req.session.cart
 * to start it will be empty with all values until they are updated.
 * Cart items are different in schema than DB items due to user selections for purchase
 */
module.exports = function Cart(oldCart) {
    //items is an array of JSON items
    this.items = oldCart.items || {};
    this.totalQty = oldCart.totalQty || 0;
    this.totalPrice = oldCart.totalPrice || 0;



    /**
     * item is the item specs, options are the buyers options { id: 3, size: large, material: aluminum, cost: 50, qty: 2 }
     * This function is called in the shop/add-item/:id
     */
    this.addItem = function(item, selectedOptions) {
        //get the current item in the cart
        let addItem = this.items[item.id];
        //if its not in the cart, create it and add it.
        if (!addItem) {
            addItem = this.items[item.id] = {
                'title': item.title,
                'totalPrice': 0,
                'totalQty': 0,
                'options': []
            }
        }

        let totalCost = item.price + selectedOptions.cost;

        //update Item totalPrice and cart totalPrice
        addItem.totalPrice = addItem.totalPrice + (totalCost * selectedOptions.qty);
        this.totalPrice = this.totalPrice + (totalCost * selectedOptions.qty);

        //update Item totalQty and cart totalQty
        addItem.totalQty = addItem.totalQty + selectedOptions.qty;
        this.totalQty = this.totalQty + selectedOptions.qty;
        //push the selectedOptions onto the cart item
        addItem.options.push(selectedOptions);

    };


    this.removeItem = function(id) {
        let removeItem = this.items[id];

        if (!removeItem) {
            console.log('item is not in cart.');
        } else {
            console.log('totalPrice is ', this.items[id].totalPrice);

            this.totalPrice = (this.totalPrice - this.items[id].totalPrice);
            this.totalQty = (this.totalQty - this.items[id].totalQty);
            delete this.items[id];
        }
    }


    this.removeOptionFromItem = function(id, index) {
        let cartItem = this.items[id];

        if (cartItem != null && cartItem.options[index] != null) {
            let selectedOptions = cartItem.options[index];
            //reduce totalPrice on item.
            cartItem.totalPrice = cartItem.totalPrice - (selectedOptions.cost * selectedOptions.qty);
            this.totalPrice = this.totalPrice - (selectedOptions.cost * selectedOptions.qty);
            //reduce totalQty on item.
            cartItem.totalQty = (cartItem.totalQty - selectedOptions.qty);
            this.totalQty = (this.totalQty - selectedOptions.qty);
            //remove option from cart.
            cartItem.options.splice(index, 1);

            if (cartItem.options.length <= 0) {
                this.removeItem(id);
            }
        } else {
            console.log('removeOptionFromItem error.');
        }

    };
}