import {
  fetchDetail,
  fetchReview,
  fetchDetailLike,
  fetchKoreaAPI,
} from '@/pages/api/detail';
import { useQuery } from '@tanstack/react-query';

export const useFetchDetail = (region: string, id: string) => {
  return useQuery({
    queryKey: ['fetchDetail', region, id],
    queryFn: () => fetchDetail(region, id),
  });
};

export const useFetchReview = (id: string) => {
  return useQuery({
    queryKey: ['fetchReview', id],
    queryFn: () => fetchReview(id),
  });
};

export const useFetchDetailLike = (id: string) => {
  return useQuery({
    queryKey: ['fetchDetailLike', id],
    queryFn: () => fetchDetailLike(id),
  });
};

export const useFetchKoreaAPI = (id: string) => {
  return useQuery({
    queryKey: ['fetchKoreaAPI', id],
    queryFn: () => fetchKoreaAPI(id),
  });
};
