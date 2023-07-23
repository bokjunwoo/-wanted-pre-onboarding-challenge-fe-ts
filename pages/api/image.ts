import apiClient from './apiClient';
import { IUserImageSave } from './api';
import axios from 'axios';

export const userImageUpload = async (image: FormData) => {
  const response = await axios.post('/user/image', image);
  return response.data;
};

export const userImageSave = async (data: IUserImageSave) => {
  const response = await apiClient({
    method: 'post',
    url: '/user/upload',
    data,
  });
  return response.data;
};
