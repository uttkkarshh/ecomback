
const express = require('express');
const User = require('../model/userschema.js')
const product = require('../model/product.js')
const router = express.Router();


router.get('/', (req, res) => {
    console.log('hello')
    res.json({ mss: "hello" })
});

router.post('/signup', async (req, res) => {
    const { name, email } = req.body
    try {
        const user = await User.create({ name, email })
        res.status(200).json(user)

    } catch (error) {
        console.log(error)

    }
});


router.post('/products', async (req, res) => {
    const { desc } = req.body
    console.log(desc);
    
    try {
        const produc = await product.find({ "desc":  new RegExp(desc, 'i')  })
        res.status(200).json(produc)

    } catch (error) {
        console.log(error)

    }


});

        



module.exports =router;
