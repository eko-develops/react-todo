/*For connecting to the db */

const mongoose = require('mongoose');

const connectDb = () => {
    mongoose.connect(process.env.MONGODB_SRV,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })
    .then( (res)=> {
        console.log("Connected to db");
    })
    .catch( (err) => {
        console.log("Error connecting to DB", err);
        process.exit(1);
    });
}

module.exports = connectDb;