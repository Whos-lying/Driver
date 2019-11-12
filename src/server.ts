import Game from './models/game';

const express = require('express');
const port = process.env.PORT || 3000;

const app = express();

const server = app.listen(port);
const io = require('socket.io')(server);

const games = {}

io.on('connection', (socket) => {
  console.log('new user connected');

  socket.on('client-connect', (name) => {

  });

  socket.on('host-newGame', (code) => {
    games[code] = new Game();
  });
  
});