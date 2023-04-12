import apiClient from './apiClient';

export const idIsDuplicate = async (email: string) => {
  const response = await apiClient({
    method: 'post',
    url: '/user/register/idcheck',
    data: { email },
  });
  return response.data.idCheck;
};

export const nickNameIsDuplicate = async (nickName: string) => {
  const response = await apiClient({
    method: 'post',
    url: '/user/register/namecheck',
    data: { nickName },
  });
  return response.data.nameCheck;
};
