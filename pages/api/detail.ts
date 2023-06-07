import apiClient from './apiClient';
import {
  IDetailLike,
  IDetailLikeInc,
  IDetailInfo,
  IKoreaAPI,
  IReviewInfo,
} from './api';

export const fetchDetail = async (
  region: string,
  id: string,
): Promise<IDetailInfo> => {
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

export const fetchDetailLike = async (id: string): Promise<IDetailLike> => {
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

export const detailLike = async (data: IDetailLikeInc) => {
  const response = await apiClient({
    method: 'post',
    url: '/like/plus',
    data,
  });
  return response.data;
};

export const detailUnlike = async (data: IDetailLikeInc) => {
  const response = await apiClient({
    method: 'post',
    url: '/like/minus',
    data,
  });
  return response.data;
};
