const helper = require('../../utils/helper');
const externalApis = require('../../utils/externalApis');

const handler = async (req, res) => {
    const country = req.params.country;
    try {
        const countryDetails = await externalApis.getCountryDetails(country);
        res.status(200).json(countryDetails);
    } catch (error) {
        console.log(`There was some error calling getCountryDetails() : ${error}`);
        res.status(500).json(helper.makeResponseObj(500, error))
    }
};

module.exports = {
    handler
}