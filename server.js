const http = require('http');
const dbConfig = require('config').dbConfig;

const mongoDb = require('./mongoDB/connection');
const app = require('./app');

mongoDb.connect(dbConfig);
const server = http.createServer(app);

server.listen(3000, () => {
    console.log('App is running on 3000');
});