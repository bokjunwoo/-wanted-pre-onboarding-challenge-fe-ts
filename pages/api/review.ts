import apiClient from './apiClient';

export const reviewAdd = async (data: { user: string; text: string }) => {
  const response = await apiClient({
    method: 'post',
    url: '/review/add',
    data,
  });
  return response.data;
};
