import axios from 'axios';

const ENDPOİNT = "https://jsonplaceholder.typicode.com";

export const getData = async (userId) => {
  try {
    const { data: user } = await axios.get(ENDPOİNT + `/users/${userId}`);
    const { data: posts } = await axios.get(ENDPOİNT + `/posts?userId=${userId}`);
    const data = {...user,posts};
    return data;
  } 
  catch (err) {
    console.log(err);
  }
};