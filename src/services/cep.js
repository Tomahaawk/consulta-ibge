import axios from 'axios';

const api = axios.create({
  baseURL: 'https://viacep.com.br/ws/',
});

export const getCepData = (cep) => {
  return api.get(`${cep}/json/unicode/`);
};
