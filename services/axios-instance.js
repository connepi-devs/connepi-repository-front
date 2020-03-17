import axios from 'axios';

export const baseURL = process.env.VUE_APP_API_URL;

export const axiosInstance = axios.create({
  baseURL: `${baseURL}/api/v1/`,
  timeout: 30000,
  headers: {
    'access-token': process.browser ? localStorage.getItem('access-token') : '',
    client: process.browser ? localStorage.getItem('client') : '',
    uid: process.browser ? localStorage.getItem('uid') : '',
  },
});
