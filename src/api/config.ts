import axios from 'axios';
import { API_ENDPOINT } from '@/config';

const instance = axios.create({
  baseURL: API_ENDPOINT,
});

export default instance;
