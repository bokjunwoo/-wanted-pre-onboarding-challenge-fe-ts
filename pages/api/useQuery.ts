import { useQuery } from '@tanstack/react-query';
import * as api from './detail';

export const useFetchDetail = (region: string, id: string) => {
  return useQuery(['fetchDetail'], () => api.fetchDetail(region, id));
};

export const useFetchReview = (id: string) => {
  return useQuery(['fetchReview'], () => api.fetchReview(id));
};

export const useFetchRevieLike = (id: string) => {
  return useQuery(['fetchReviewLike'], () => api.fetchReviewLike(id));
};

export const useFetchKoreaAPI = (id: string) => {
  return useQuery(['fetchKoreaAPI'], () => api.fetchKoreaAPI(id));
};
