// JavaScript source code
const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const product = new Schema({
    name: String,
    desc: String,
    price: Number,
    gender:String
});

const MyModel = mongoose.model('Modeln', product);


module.exports = MyModel;