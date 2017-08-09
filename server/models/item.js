const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    imagePath: { type: String, required: true },
    title: { type: String, required: true },
    location: { type: String, required: true },
    inventory: { type: Number, required: true },
    price: { type: Number, required: true },
    scaling: { type: Number, required: true },
    options: { type: Array }
});

module.exports = mongoose.model('Item', itemSchema);