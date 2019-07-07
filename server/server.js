// Dependencies
const fs = require('fs');
const path = require('path');
const https = require('https');
const express = require('express');
const mongoose = require('mongoose');
const serverConfig = require('./server.config');

function run(port, addMiddleware) {
  const Schema = mongoose.Schema;

  const userPassString = serverConfig.mongo.requireAuth ? `${serverConfig.mongo.user}:${serverConfig.mongo.password}@` : '';
  mongoose.connect(`mongodb://${userPassString}localhost/${serverConfig.mongo.db}`, { useNewUrlParser: true });

  var PostsSchema = new Schema({
    body: String,
    title: String,
    date: String
  });

  const app = express();

  // Certificate
  const privateKey = fs.readFileSync(serverConfig.privkey, 'utf8');
  const certificate = fs.readFileSync(serverConfig.cert, 'utf8');
  const ca = fs.readFileSync(serverConfig.chain, 'utf8');

  const credentials = {
    key: privateKey,
    cert: certificate,
    ca: ca
  };

  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  app.use(express.urlencoded());
  app.use(express.json());

  addMiddleware(app, express);

  app.post('/api/db', (req, res) => {
    const action = req.body.action;

    switch(action) {
      case 'add-post': {
        const pwd = req.body.pwd;
        const title = req.body.title;
        const body = req.body.body;
        const date = req.body.date;

        if(pwd === 'mibstap58') {
          var Post = mongoose.model('posts', PostsSchema);

          var post = new Post({ body: body, title: title, date: date });

          post.save((err, post) => {
            if (err) console.error(err);
          });

          res.end('OK');
        } else {
          res.end('ERR');
        }

        return;
      }
      case 'get-posts': {
        var Post = mongoose.model('posts', PostsSchema);

        Post.find({ }, (err, docs) => {
          res.end(JSON.stringify(docs));
        });

        return;
      }
      case 'edit-post': {
        const id = req.body.id;
        const title = req.body.title;
        const body = req.body.body;
        const pwd = req.body.pwd;

        if(pwd == 'mibstap58') {
          var Post = mongoose.model('posts', PostsSchema);
          Post.findOneAndUpdate({ _id: id }, { title: title, body: body }, { useFindAndModify: false }, (err, doc) => {
            console.log(err);
          });
          res.end('OK');
        } else {
          res.end('ERR');
        }

        return;
      }
    }

    res.end('error');
  });

  const httpsServer = https.createServer(credentials, app);

  httpsServer.listen(port, () => {
    console.log('HTTPS Server running on port ' + port);
  });
}

module.exports = {
  run: run
}