import { IListInfo } from './api';
import apiClient from './apiClient';

export const fetchList = async (
  region: string,
  type: string,
  page?: number,
): Promise<IListInfo> => {
  const response = await apiClient({
    method: 'get',
    url: `/list/${region}/${type}?page=${page || 1}`,
    params: { region, type, page },
  });
  return response.data;
};
