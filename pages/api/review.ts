import { IReviewAdd, IReviewEdit } from './api';
import apiClient from './apiClient';

export const reviewAdd = async (data: IReviewAdd) => {
  const response = await apiClient({
    method: 'post',
    url: '/review/add',
    data,
  });
  return response.data;
};

export const reviewEdit = async (data: IReviewEdit) => {
  const response = await apiClient({
    method: 'post',
    url: '/review/edit',
    data,
  });
  return response.data;
};
