"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _axios = require('axios'); var _axios2 = _interopRequireDefault(_axios);

const ENDPOINT = "https://jsonplaceholder.typicode.com";

 const getData = async (userId) => {
  try {
    let { data: user } = await _axios2.default.get(`${ENDPOINT}/users/${userId}`);
    let { data: posts } = await _axios2.default.get(`${ENDPOINT}/posts?userId=${userId}`);
    const data = {...user,posts};
    return data;
  } 
  catch (e) {
    console.log(e);
  }
}; exports.getData = getData;