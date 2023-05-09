import axios from 'axios';
import apiClient from './apiClient';

export const userChecklistItem = async () => {
  const response = await axios.post('http://localhost:4000/checklist');
  return response.data;
};
