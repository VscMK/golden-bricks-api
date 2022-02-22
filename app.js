require('dotenv').config()
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(process.env.PORT, () =>
  console.log(`App is listening on port ${process.env.PORT}!`)
);

module.exports = {
  app,
};
