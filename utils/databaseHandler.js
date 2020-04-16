const User = require('../models/user');

const saveUser = userDoc => {
    const userData = new User(userDoc);
    return new Promise((resolve, reject) => {
        userData.save()
            .then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err);
            });
    });
};

const getUsers = () => {
    return new Promise((resolve, reject) => {
        User.find()
            .then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err);
            });
    });
}

module.exports = {
    saveUser,
    getUsers
};