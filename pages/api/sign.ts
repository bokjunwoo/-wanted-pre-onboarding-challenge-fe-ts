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
  return response;
};

export const kakaoRegister = async (id: number, nickname: string) => {
  const response = await apiClient({
    method: 'post',
    url: '/user/kakaoregister',
    data: { type: 'kakao', id, nickname },
  });
  return response;
};

export const localLogin = async (email: string, password: string) => {
  const response = await apiClient({
    method: 'post',
    url: '/user/local',
    data: { email, password },
  });
  return response;
};

export const kakaoLogin = async (id: number) => {
  const response = await apiClient({
    method: 'post',
    url: '/user/kakao',
    data: { id },
  });
  return response;
};
