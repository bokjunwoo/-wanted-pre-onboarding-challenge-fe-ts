import { DateObject } from '@/atom/planSelector';
import { ISearchData } from './api';
import apiClient from './apiClient';

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
