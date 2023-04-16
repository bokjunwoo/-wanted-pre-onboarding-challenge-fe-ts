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
    url: '/user/register',
    data: { type: 'local', email, password, nickname },
  });
  return response;
};

export const localLogin = async (email: string, password: string) => {
  const response = await apiClient({
    method: 'post',
    url: '/user/login',
    data: { email, password },
  });
  return response;
};
