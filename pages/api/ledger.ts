import axios from 'axios';
import apiClient from './apiClient';

export const userLedgerItem = async () => {
  const response = await axios.post('http://localhost:4000/charge');
  return response.data;
};

export const ledgerAdd = async (data: {
  user: string;
  date: string;
  title: string;
  price: string;
}) => {
  const response = await apiClient({
    method: 'post',
    url: 'charge/add',
    data,
  });
  return response.data;
};

export const ledgerDelete = async (data: { user: string; id: string }) => {
  const response = await apiClient({
    method: 'delete',
    url: 'charge/delete',
    data,
  });
  return response.data;
};
