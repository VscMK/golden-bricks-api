require('dotenv').config()
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require('path');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const PORT = process.env.PORT || 8081;

app.listen(PORT, () =>
    console.log(`App is listening on port ${PORT}!`)
);

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => res.render('index', { layout: 'landing' }));
app.use('/users', require('./routes/users'));
app.use('/apiary', require('./routes/apiary'));
app.use('/colony', require('./routes/colony'));
app.use('/gondola', require('./routes/gondola'));
app.use('/queen', require('./routes/queen'));


module.exports = {
    app,
};