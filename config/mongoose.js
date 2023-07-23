const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/placement');

const mongoDB = mongoose.connection;

mongoDB.on('error',console.error.bind(console,"Error connecting to MongoDB"));

mongoDB.once('open',function(){
    console.log('Connected to database :: MongoDB')
});

module.exports = mongoDB;