const express = require('express');

const helper = require('../utils/helper');
const externalApis = require('../utils/externalApis');

const router = express.Router();

router.get('/getAffectedCountries', async (req, res) => {
    try {
        const affectedCountries = await externalApis.getAffectedCountries();
        
        if (!Array.isArray(affectedCountries)) throw Error('Some error in response from getAffectedCountries');

        let countries = [];
        countries.push(affectedCountries.forEach(element => {
            countries.push(element.Country);
        }))
        res.status(200).json({
            affectedCountries: countries.length,
            countries
        });

    } catch (error) {
        console.log(`There was some error calling getAffectedCountries() : ${error}`);
        res.status(500).json(helper.makeResponseObj(500, error))
    }

});

module.exports = router;