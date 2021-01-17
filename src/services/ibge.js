import axios from 'axios';

const api = axios.create({
  baseURL: 'https://servicodados.ibge.gov.br/api/v1/pesquisas/',
});

export const getData = (cityId, researchId) => {
  return api.get(`${researchId}/resultados/${cityId}`);
};
