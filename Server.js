const express = require('express');
const Urouter = require('./Routes/routes.js');
const mongoose = require('mongoose');


const app = express();


mongoose.connect('mongodb+srv://utkarsh:AvNYlRg1wkuKwUM7@cluster.uwudm9u.mongodb.net/test')
    .then(() => {
        console.log('data')
        }
        )
    .catch((error) => {
        console.log(error)
    })

app.use(express.json());

app.use('/user', Urouter);


app.listen(4000, () => {
    console.log('listening')
})