import axios from 'axios';
import apiClient from './apiClient';

export const userLedgerItem = async () => {
  const response = await axios.post('/charge');
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

export const ledgerDeleteAll = async (data: { user: string; }) => {
  const response = await apiClient({
    method: 'delete',
    url: 'charge/deleteall',
    data,
  });
  return response.data;
};