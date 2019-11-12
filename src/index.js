"use strict";
exports.__esModule = true;
var game_1 = require("./models/game");
var express = require('express');
var port = process.env.PORT || 3000;
var app = express();
var server = app.listen(port);
var io = require('socket.io')(server);
var games = {};
io.on('connection', function (socket) {
    console.log('new user connected');
    socket.on('client-connect', function (name) {
    });
    socket.on('host-newGame', function (code) {
        games[code] = new game_1["default"]();
    });
});
