import { DateObject } from '@/atom/planSelector';
import { IPlanDelete } from '@/pages/api/api';
import { planAll, planDelete } from '@/pages/api/plan';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export interface ExtendedDateObject extends DateObject {
  _id: string;
}

export const useUserPlanData = (): {
  userPlan: ExtendedDateObject[] | undefined;
  userPlanLoading: boolean;
  handleDeletePlan: (data: IPlanDelete) => void;
} => {
  const queryClient = useQueryClient();

  const { data: userPlan, isLoading: userPlanLoading } = useQuery<
    ExtendedDateObject[],
    AxiosError
  >({
    queryKey: ['userPlan'],
    queryFn: () => planAll(),
  });

  const deletePlanMutation = useMutation(['userPlan'], planDelete, {
    onSuccess: () => {
      queryClient.invalidateQueries(['userPlan']);
    },
  });

  const handleDeletePlan = (data: IPlanDelete) => {
    deletePlanMutation.mutate(data);
  };

  return { userPlan, userPlanLoading, handleDeletePlan };
};
