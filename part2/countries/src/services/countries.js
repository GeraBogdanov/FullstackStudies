import axios from "axios";

const baseURL = 'https://studies.cs.helsinki.fi/restcountries/api';

function getAll() {
  const request = axios.get(`${baseURL}/all`);
  return request.then((response) => {
    console.log('Function: getAll(); promise: fulfilled');
    return response.data;
  });
}

export default { getAll };
