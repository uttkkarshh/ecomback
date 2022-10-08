const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const User = new Schema({
    name: String,
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    
});

const MyModel = mongoose.model('ModelName',User);


module.exports = MyModel;


