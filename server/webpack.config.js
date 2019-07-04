const serverConfig = require('server.config');

module.exports = {
  devServer: {
    disableHostCheck: true,
    https: {
      key: fs.readFileSync(serverConfig.privkey),
      cert: fs.readFileSync(serverConfig.cert),
      ca: fs.readFileSync(serverConfig.chain)
    }
  }
};