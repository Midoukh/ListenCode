import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://glacial-everglades-26160.herokuapp.com',
});

export default instance;
