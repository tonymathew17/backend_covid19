const express = require('express');

const getAffectedCountries = require('./handlers/getAffectedCountries');
const getCountry = require('./handlers/getCountry');

const router = express.Router();

router.get('/getAffectedCountries', getAffectedCountries.handler);

router.get('/getCountry/:country', getCountry.handler);

module.exports = router;