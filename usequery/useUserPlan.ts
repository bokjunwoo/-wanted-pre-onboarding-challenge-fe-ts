import { DateObject } from '@/atom/planSelector';
import { planAll } from '@/pages/api/plan';
import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export const useUserPlanData = (): {
  userPlan: DateObject[] | undefined;
  userPlanLoading: boolean;
} => {
  const { data: userPlan, isLoading: userPlanLoading } = useQuery<
    DateObject[],
    AxiosError
  >({
    queryKey: ['userPlan'],
    queryFn: () => planAll(),
  });

  return { userPlan, userPlanLoading };
};
