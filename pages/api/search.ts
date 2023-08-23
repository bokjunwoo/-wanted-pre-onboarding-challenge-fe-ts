import axios from 'axios';
import { ISearchData } from './api';
import apiClient from './apiClient';

export const loadsearchTitle = async (data: ISearchData) => {
  const response = await axios.get(
    `/search?region=${data.region}&title=${data.search}&page=${data.page}`,
  );
  return response.data;
};

export const loadSearchBest = async (region: string) => {
  const response = await apiClient({
    method: 'post',
    url: '/search/best',
    data: { region },
  });
  return response.data.data;
};
