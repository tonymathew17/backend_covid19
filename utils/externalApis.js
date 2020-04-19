const request = require('request');
const apis = require('config').apis;
const helper = require('./helper');

const getAffectedCountries = () => {
    const uri = apis.getCountries;
    const options = {
        method: "GET",
        uri: apis.getCountries,
        json: true
    }
    return new Promise((resolve, reject) => {
        request(options, (err, res, body) => {
            if (err) {
                console.error(`There was an error calling the api ${uri}: ${err}`);
                reject(helper.makeResponseObj(500, err));
                return;
            }
            resolve(body);
        });

    });
};

const getCountryDetails = (country) => {
    let uri = apis.getCountry;
    uri += country;

    const options = {
        method: 'GET',
        uri,
        json: true
    }

    return new Promise((resolve, reject) => {
        request(options, (err, res, body) => {
            if (err) {
                console.error(`There was an error calling the api ${uri}: ${err}`);
                reject(helper.makeResponseObj(500, err));
                return;
            }
            resolve(body);
        });
    });
};
module.exports = {
    getAffectedCountries,
    getCountryDetails
}