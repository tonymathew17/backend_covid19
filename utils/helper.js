/**
 * @description This function returns the response object
 * @param {*} statusCode 
 * @param {*} msg 
 */
const makeResponseObj = (statusCode, msg) => {
    return {
        statusCode, res
    }
}

module.exports = {
    makeResponseObj
}