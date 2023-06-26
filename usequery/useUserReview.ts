import { IReviewInfo } from '@/pages/api/api';
import { reviewAll } from '@/pages/api/review';
import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export const useUserReviewData = (): {
  userReview: IReviewInfo[] | undefined;
  userReviewLoading: boolean;
} => {
  const { data: userReview, isLoading: userReviewLoading } = useQuery<
    IReviewInfo[],
    AxiosError
  >({
    queryKey: ['userReview'],
    queryFn: () => reviewAll(),
  });

  return { userReview, userReviewLoading };
};
