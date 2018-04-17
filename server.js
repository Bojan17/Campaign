const { createServer } = require('http');
const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Idea = require('./models/Idea');

mongoose.Promise = global.Promise;
mongoose.set("debug", true);
mongoose.connect("mongodb://smart:smart@ds237979.mlab.com:37979/smartkick", {
  keepAlive: true
});

const app = next({
  dev: process.env.NODE_ENV !== 'production'
});



const routes = require('./routes');
const handle = routes.getRequestHandler(app);

app.prepare().then(() => {
  //createServer(handler).listen(3000, (err) => {
  const server = express()
  server.use(bodyParser.json())

  require('./dbhandler.js')(server);

    server.get('*', handle)
    server.listen(3000,(err) => {
      if (err) throw err;
      console.log('Ready on localhost:3000');
  });
});
