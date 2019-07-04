const server = require('./server');
const port = Number(process.argv[2]);

server.run(port, (app) => { })