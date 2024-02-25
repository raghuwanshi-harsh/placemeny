const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://dbuser:dbuserpass@cluster0.5xusovb.mongodb.net/');

const mongoDB = mongoose.connection;

mongoDB.on('error',console.error.bind(console,"Error connecting to MongoDB"));

mongoDB.once('open',function(){
    console.log('Connected to database :: MongoDB')
});

module.exports = mongoDB;
