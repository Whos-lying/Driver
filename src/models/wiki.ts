export default class Wiki {
  name: String;
  url: String;
  summary: String;

  constructor(name: String, url: String, summary: String){
    this.url = url;
    this.name = name;
    this.summary = summary;
  }
}