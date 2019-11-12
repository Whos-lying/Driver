import Player from './player';

export default class Game {
  players: Player[]

  constructor(){
    this.players = []
  }

  addPlayer(player: Player){
    this.players.push(player)
  }

  increasePlayerScore(player: Player){
    this.players.forEach(cur => {
      if(cur === player){
        cur.increaseScore();
      }
    });
  }

  getHighestScore(){
    let max = 0;
    let maxPlayer: Player;

    this.players.forEach(player => {
      if(player.getScore() > max){
        max = player.getScore();
        maxPlayer = player;
      }
    });

    return maxPlayer;
  }

  getRandomArticle(){
    return this.players[0].getWiki();
  }
}