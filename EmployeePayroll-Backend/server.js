
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const routes = require('./Routes/route')
app.use(express.json())
app.use('/', routes)
app.listen(3000, () => {
    console.log('server has started at port 3000');
    mongoose.connect('mongodb://localhost:27017/users').then(() => {
        console.log("database connect successfully");

    }).catch(() => {
        console.log("fail to connect");
    })
})

