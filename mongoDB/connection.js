const mongoose = require('mongoose');

const connect = (dbConfig) => {
    const dbURL = `mongodb://${dbConfig.host}:${dbConfig.port}/${dbConfig.dbName}`;

    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }


    mongoose.connect(dbURL, options);

    mongoose.connection.on('connected', () => {
        console.log(`Connected to Mongodb! ${dbURL}`);
    });

    mongoose.connection.on('error', err => {
        console.log('There was an error connecting to db: ', err);
    });

    mongoose.connection.on('disconnected', () => {
        console.log('Disconnected from db! Reconnecting in 3 seconds')
        setTimeout(() => {
            connect();
        }, 3000);
    });
}

module.exports = {
    connect
}