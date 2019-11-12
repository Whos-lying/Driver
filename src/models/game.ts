import Player from './player';
import Wiki from '../services/wiki';

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

  async setWikis(){
    const numPlayers = this.players.length;

    const articles: any[] = await Wiki.getArticles(numPlayers);

    this.players.forEach(player => {
      const { title, source, extract } = articles.pop();

      player.setWiki(source, title, extract);
    });
  }

  getRandomArticle(){
    //need to change this
    return this.players[0].getWiki();
  }
}