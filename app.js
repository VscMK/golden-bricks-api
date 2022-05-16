require('dotenv').config()
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require('path');
const cors = require("cors");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const PORT = process.env.PORT || 8081;

app.listen(PORT, () =>
    console.log(`App is listening on port ${PORT}!`)
);

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
});

// Routes
app.get('/', (req, res) => res.render('index', { layout: 'landing' }));
app.use('/users', require('./routes/users'));
app.use('/apiary', require('./routes/apiary'));
app.use('/gondola', require('./routes/gondola'));
app.use('/colony', require('./routes/colony'));
app.use('/queen', require('./routes/queen'));
app.use('/inspection', require('./routes/inspection'));




module.exports = {
    app,
};