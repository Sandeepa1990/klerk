const mongoose = require('mongoose');

//defining the schema for the product 

const productSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    name : String,
    price : Number
});

module.exports = mongoose.model('Product', productSchema);