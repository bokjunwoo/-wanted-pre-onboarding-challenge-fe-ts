import apiClient from './apiClient';
import { IItemInfo, IKoreaAPI, IReviewInfo } from './api';

export const fetchDetail = async (
  region: string,
  id: string,
): Promise<IItemInfo> => {
  const response = await apiClient({
    method: 'get',
    url: `/detail/${region}/${id}`,
    params: { region, id },
  });
  return response.data;
};

export const fetchReview = async (id: string): Promise<IReviewInfo[]> => {
  const response = await apiClient({
    method: 'get',
    url: `/review/${id}`,
    params: { id },
  });
  return response.data;
};

export const fetchReviewLike = async (id: string): Promise<string[]> => {
  const response = await apiClient({
    method: 'get',
    url: `/detail/${id}`,
    params: { id },
  });
  return response.data;
};

export const fetchKoreaAPI = async (id: string): Promise<IKoreaAPI> => {
  const response = await apiClient({
    method: 'post',
    url: `/detail/${id}`,
    params: { id },
  });
  return response.data;
};
