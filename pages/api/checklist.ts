import axios from 'axios';
import apiClient from './apiClient';

export const userChecklistItem = async () => {
  const response = await axios.post('http://localhost:4000/checklist');
  return response.data;
};

export const checklistAdd = async (data: { title: string; item: string, user: string }) => {
  const response = await apiClient({
    method: 'post',
    url: 'checklist/add',
    data,
  });
  return response.data;
};

export const checklistDelete = async (data: { title: string; item: string, user: string }) => {
  const response = await apiClient({
    method: 'delete',
    url: 'checklist/delete',
    data,
  });
  return response.data;
};