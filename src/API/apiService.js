/* eslint-disable */
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;


const getCep = async (cep) => {
  const res = await axios.get(`${API_URL}/${cep}/json/`);
  return res.data
}



export {getCep};