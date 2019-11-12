"use strict";
exports.__esModule = true;
var express = require('express');
var port = process.env.PORT || 3000;
var wiki_1 = require("./services/wiki");
wiki_1["default"].getArticles(1);
var app = express();
var server = app.listen(port);
var io = require('socket.io')(server);
io.on('connection', function (socket) {
    console.log('new user connected');
    socket.on('client-connect', function (name) {
    });
});
