const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const jsonServer = require('json-server');

const db_path = path.join(__dirname, 'db.json');
const router = jsonServer.router(db_path);
const server = jsonServer.create();

server.use(bodyParser.json());
server.use(jsonServer.defaults());
server.use(router);

server.listen(8000, () => {
    console.info('API Server running!');
});
