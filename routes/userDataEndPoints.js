const express = require('express');
const router = express.Router();

const userDbOps = require('../utils/databaseHandler');

router.post('/saveUser', async (req, res) => {
    try {
        const response = await userDbOps.saveUser(req.body);
        res.status(200).json({
            msg: "User data succesfully saved to db!",
            response
        });
    } catch (error) {
        console.error('There was an error saving user data to db: ', error);
        res.status(500).json({
            error: 'There was an error saving user data to db'
        })
    }
});

router.get('/getUsers', async (req, res) => {
    try {
        const users = await userDbOps.getUsers();
        res.status(200).json(users);
    } catch (error) {
        console.log('There was an error getting users from db: ', error);
        res.status(500).json({
            error: 'There was an error getting users from db'
        })
    }
});

module.exports = router;
