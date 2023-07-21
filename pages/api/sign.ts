import axios from 'axios';
import apiClient from './apiClient';

export const idIsDuplicate = async (email: string) => {
  const response = await apiClient({
    method: 'post',
    url: '/user/register/idcheck',
    data: { email },
  });
  return response.data.idCheck;
};

export const nickNameIsDuplicate = async (nickname: string) => {
  const response = await apiClient({
    method: 'post',
    url: '/user/register/namecheck',
    data: { nickname },
  });
  return response.data.nameCheck;
};

export const localRegister = async (
  email: string,
  password: string,
  nickname: string,
) => {
  const response = await apiClient({
    method: 'post',
    url: '/user/localregister',
    data: { type: 'local', email, password, nickname },
  });
  return response.data;
};

export const kakaoRegister = async (data: { id: number; nickname: string }) => {
  const response = await apiClient({
    method: 'post',
    url: '/user/kakaoregister',
    data: { type: 'kakao', data },
  });
  return response.data;
};

export const localLogin = async (data: { email: string; password: string }) => {
  const response = await apiClient({
    method: 'post',
    url: '/user/local',
    data: data,
  });
  return response.data;
};

export const kakaoLogin = async (data: { id: number }) => {
  const response = await apiClient({
    method: 'post',
    url: '/user/kakao',
    data,
  });
  return response.data;
};

export const userInfo = async () => {
  const response = await axios.get('/user');
  return response.data;
};

export const userImageData = async () => {
  const response = await axios.get('/user/image');
  return response.data;
};

export const userlogout = async () => {
  const response = await axios.post('/user/logout', {
    withCredentials: true,
  });
  return response.data;
};
