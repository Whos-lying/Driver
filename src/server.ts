const express = require('express');
const port = process.env.PORT || 3000;

const app = express();

const server = app.listen(port);
const io = require('socket.io')(server);

io.on('connection', (socket) => {
  console.log('new user connected');

  socket.on('client-connect', name => {
    
  })
})