import { ISearchData } from './api';
import apiClient from './apiClient';

export const searchTitle = async (data: ISearchData) => {
  const response = await apiClient({
    method: 'get',
    url: `/search?region=${data.region}?title${data.search}`,
    params: data,
  });
  return response.data;
};
