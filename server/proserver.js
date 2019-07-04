const server = require('./server');
const port = Number(process.argv[2]);

server.run(port, (app, express) => {
  app.use(express.static('../client/probuild'));
  app.use('*', express.static('../client/probuild/index.html'));
});