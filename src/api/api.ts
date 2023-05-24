import axios from 'axios';

const baseURL = 'http://candidato01.globalthings.net/';
const accessKey = 'e2c88e85dc854de69162eee98ea11809';

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    AccessKey: accessKey,
  },
});

export default api;
