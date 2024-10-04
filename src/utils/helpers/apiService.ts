import axios from 'axios';

const baseURL = 'https://newsapi.org/v2';
const apiKey = 'b00f1ba9a58c4d299489c6433428904f';

export function get(url: string) {
  const myUrl = `${baseURL}${url}&apiKey=${apiKey}`;
  return axios.get(myUrl);
}
