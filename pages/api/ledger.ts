import axios from 'axios';
import apiClient from './apiClient';

export const userLedgerItem = async () => {
  const response = await axios.post('http://localhost:4000/charge');
  return response.data;
};