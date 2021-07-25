import axios from 'axios';

const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/devlobao84/desafio-02---tex/produtos'
})

export default api;