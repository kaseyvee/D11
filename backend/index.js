require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;
const routes = require('./routes/routes');

// mongo setup
mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})
database.once('connected', () => {
    console.log('Database Connected');
})


// express setup
app.use(express.json());
app.use('/api', routes)
app.listen(process.env.PORT, () => {
    console.log(`Server Started at ${process.ENV.PORT}`)
})