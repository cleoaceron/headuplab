import newsApi from '../newsApi';
import {ARTICLES_API} from '../apiConstants';

class Articles {
  fnGetArticles = async date => {
    try {
      return await newsApi.get(
        `${ARTICLES_API.NEWS}?q=tesla&from=${date}&sortBy=publishedAt&apiKey=${ARTICLES_API.PUBLICKEY}`,
      );
    } catch (error) {
      return error;
    }
  };
}

Articles.api = new Articles();
export default Articles;
