import { DateObject } from '@/atom/planSelector';
import { ISearchData } from './api';
import apiClient from './apiClient';
import axios from 'axios';

export const searchTitle = async (data: ISearchData) => {
  const response = await apiClient({
    method: 'post',
    url: '/plan/search',
    data,
  });
  return response.data;
};

export const planAdd = async (data: DateObject) => {
  const response = await apiClient({
    method: 'post',
    url: '/plan/add',
    data,
  });
  return response.data;
};

export const planAll = async () => {
  const response = await axios.post('/plan/all');
  return response.data;
};
