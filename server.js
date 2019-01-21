/**
Nodemon: Tracks server code and restarts if any changes
Express: Run and create server.
*/

var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);