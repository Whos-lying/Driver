"use strict";
exports.__esModule = true;
var wiki_1 = require("./wiki");
var Player = /** @class */ (function () {
    function Player(name) {
        this.name = name;
        this.score = 0;
    }
    Player.prototype.increaseScore = function () {
        this.score++;
    };
    Player.prototype.getScore = function () {
        return this.score;
    };
    Player.prototype.getName = function () {
        return this.name;
    };
    Player.prototype.setWiki = function (url, article, summary) {
        this.wiki = new wiki_1["default"](article, url, summary);
    };
    Player.prototype.getWiki = function () {
        return this.wiki;
    };
    return Player;
}());
exports["default"] = Player;
