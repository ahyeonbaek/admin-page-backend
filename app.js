require('./db_init');
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const accomoRoutes = require('./routes/accomo.routes');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/images",express.static("images"));
app.use('/api/accomo', accomoRoutes); // /api/accomo/regist

module.exports = app;