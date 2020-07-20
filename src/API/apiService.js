/* eslint-disable */
import axios from 'axios';

const API_URL = 'https://viacep.com.br/ws';


const getCep = async (cep) => {
  const res = await axios.get(`${API_URL}/${cep}/json/`);
  return res.data
}



export {getCep};