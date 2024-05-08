const connect = require('./configs/db');
const express = require('express');

require("dotenv").config();
const PORT = process.env.PORT || 7000;

const app = express();
app.listen(PORT, async () => {
    try {
        await connect();
        console.log(`Server is running on ${PORT}`);

    } catch (error) {
        console.log(error.message);
    }
});