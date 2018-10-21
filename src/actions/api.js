import axios from "axios";

const URL = "https://api.themoviedb.org/3";
const API_KEY = "api_key=e5693481ef000bfdd855a0f21ad39631&language=en-US";

export default class Api {
  static async getApi(query, queryVariable) {
    const res = await axios.get(`${URL}${query}${API_KEY}${queryVariable}`);
    if (res.status >= 200 && res.status <= 207) {
      return res;
    } else {
      throw new Error(`HTTP status ${res.status}`);
    }
  }
}
