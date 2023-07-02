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
