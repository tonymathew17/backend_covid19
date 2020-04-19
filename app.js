const express = require('express');
const cors = require('cors');
const app = express();

const userRoutes = require('./routes/userDataEndPoints');
const covid19Routes = require('./routes/covid19data');

app.use(cors());
app.use(express.json());
app.use(userRoutes);
app.use(covid19Routes);

module.exports = app;