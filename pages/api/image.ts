import axios from 'axios';

export const userImageUpload = async (image: FormData) => {
  const response = await axios.post('/user/image', image);
  return response.data;
};
