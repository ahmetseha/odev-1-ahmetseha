import axios from 'axios';

const ENDPOINT = "https://jsonplaceholder.typicode.com";

export const getData = async (userId) => {
  try {
    let { data: user } = await axios.get(`${ENDPOINT}/users/${userId}`);
    let { data: posts } = await axios.get(`${ENDPOINT}/posts?userId=${userId}`);
    const data = {...user,posts};
    return data;
  } 
  catch (e) {
    console.log(e);
  }
};