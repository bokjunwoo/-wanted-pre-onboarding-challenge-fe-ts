import { DateObject } from '@/atom/planSelector';
import { IPlanDelete, ISearchData } from './api';
import apiClient from './apiClient';
import axios from 'axios';

export const planSearch = async (data: ISearchData) => {
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

export const planDelete = async (data: IPlanDelete) => {
  const response = await apiClient({
    method: 'delete',
    url: '/plan/delete',
    data,
  });
  return response.data;
};
