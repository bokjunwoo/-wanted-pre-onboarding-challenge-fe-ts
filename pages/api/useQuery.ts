import { useQuery } from '@tanstack/react-query';
import { IReviewInfo } from './api';
import * as apiDetail from './detail';
import * as apiList from './list';

// detail
export const useFetchDetail = (region: string, id: string) => {
  return useQuery(['fetchDetail'], () => apiDetail.fetchDetail(region, id));
};

export const useFetchReview = (id: string) => {
  return useQuery(['fetchReview'], () => apiDetail.fetchReview(id));
};

export const useFetchRevieLike = (id: string) => {
  return useQuery(['fetchReviewLike'], () => apiDetail.fetchReviewLike(id));
};

export const useFetchKoreaAPI = (id: string) => {
  return useQuery(['fetchKoreaAPI'], () => apiDetail.fetchKoreaAPI(id));
};
