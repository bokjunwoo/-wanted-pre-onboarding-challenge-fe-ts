import apiClient from './apiClient';

export const idIsDuplicate = async (id: string) => {
  const response = await apiClient({
    method: 'post',
    url: '/user/register/idcheck',
    data: { id },
  });
  return response.data.idCheck;
};

export const nickNameIsDuplicate = async (id: string) => {
  const response = await apiClient({
    method: 'post',
    url: '/user/register/namecheck',
    data: { id },
  });
  return response.data.nameCheck;
};
