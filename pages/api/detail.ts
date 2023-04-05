import apiClient from './apiClient';
import axios from 'axios';
import { IItemInfo, IKoreaAPI, IReviewInfo } from './api';

export const fetchDetail = async (
  region: string,
  id: string,
): Promise<IItemInfo> => {
  const response = await apiClient({
    method: 'get',
    url: `/detail/${region}/${id}`,
    params: { region, id },
  });
  return response.data;
};

export const fetchReview = async (id: string): Promise<IReviewInfo[]> => {
  const response = await apiClient({
    method: 'get',
    url: `/review/${id}`,
    params: { id },
  });
  return response.data;
};

export const fetchReviewLike = async (id: string): Promise<string[]> => {
  const response = await apiClient({
    method: 'get',
    url: `/detail/${id}`,
    params: { id },
  });
  return response.data.likeuser;
};

export const fetchKoreaAPI = async (id: string): Promise<IKoreaAPI> => {
  const response = await axios.get(
    `https://apis.data.go.kr/B551011/KorService/detailCommon?serviceKey=rfaoGpiapHFqOcUT6bqfERRxy1WVxzOdOpEC3ChyAFPEfONdSMdRVNETTJKRhqTbPuZ2krpG2mQJMXDbyG74RA%3D%3D&MobileOS=ETC&MobileApp=AppTest&_type=json&contentId=${id}&defaultYN=Y&firstImageYN=Y&areacodeYN=Y&catcodeYN=Y&addrinfoYN=Y&mapinfoYN=Y&overviewYN=Y`,
  );
  return {
    homepage: response.data.response.body.items.item[0].homepage,
    overview: response.data.response.body.items.item[0].overview,
  };
};
