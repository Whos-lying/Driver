import Wiki from './wiki';

export default class Player{
  name: String;
  score: number;
  wiki: Wiki

  constructor(name: String){
    this.name = name;
    this.score = 0;
  }

  increaseScore(){
    this.score++;
  }

  getScore(){
    return this.score;
  }

  getName() {
    return this.name;
  }

  setWiki(url: String, article: String, summary: String){
    let wikiObj = new Wiki(name, url, summary);

    this.wiki = wikiObj;
  }

  getWiki(){
    return this.wiki;
  }
}
