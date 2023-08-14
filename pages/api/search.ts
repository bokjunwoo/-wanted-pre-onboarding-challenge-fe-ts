import axios from 'axios';
import { ISearchData } from './api';

export const loadsearchTitle = async (data: ISearchData) => {
  const response = await axios.get(
    `/search?region=${data.region}&title=${data.search}&page=${data.page}`,
  );
  return response.data;
};
