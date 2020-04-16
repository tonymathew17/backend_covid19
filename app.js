const express = require('express');
const app = express();

// const router = require('./routes/userDataEndPoints');
const covid19Routes = require('./routes/covid19data');

app.use(express.json());
app.use(covid19Routes);

module.exports = app;