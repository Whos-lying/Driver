import axios from 'axios';

const getArticles = async (num) => {
  const articles: Object[] = [];
  const found: String[] = [];

  while(found.length !== num){
    const { data } = await axios.get('https://en.wikipedia.org/api/rest_v1/page/random/summary');
    const { title } = data;

    if(!found.includes(title)){
      articles.push(data);
      found.push(title);
    }
  }
  
  return articles;
}

export default { getArticles }