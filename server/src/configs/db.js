const mongoose = require("mongoose");
require("dotenv").config();

const connect = () => {
    mongoose.set('strictQuery', false);
    return mongoose.connect(process.env.DB_URL);
};

module.exports = connect;