import axios from 'axios';

const URL = 'http://numbersapi.com';
const connector = axios.create({
  baseURL: URL,
  headers: {
    'Content-type': 'application/json'
  }
})

export const apiGetRandom = async (type: string) => {
  return await connector
    .get(`/random/${type}`)
    .then(res=>{
      return res.data? res.data : '';
    })
}

export const apiGet = async (type: string, value: string) => {
  return await connector
    .get(`/${value}/${type}`)
    .then(res=>{
      return res.data ? res.data : '';
    })
  }