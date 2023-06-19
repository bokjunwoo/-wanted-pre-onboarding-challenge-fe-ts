import { useQuery } from '@tanstack/react-query';
import { userChecklistItem } from '@/pages/api/checklist';
import { AxiosError } from 'axios';

export type ChecklistItem = {
  item: string;
  checked: boolean;
};

export type ChecklistContent = {
  title: string;
  items: ChecklistItem[];
  index: number;
};

type ChecklistItems = {
  content: ChecklistContent[];
};

export type Checklist = {
  _id: string;
  nickname: string;
  checklist: ChecklistItems;
};

export const useChecklistData = (): {
  checklist: ChecklistItems | undefined;
  checklistLoading: boolean;
} => {
  const { data: checklist, isLoading: checklistLoading } = useQuery<
    Checklist,
    AxiosError
  >({
    queryKey: ['checklist'],
    queryFn: () => userChecklistItem(),
  });

  return { checklist: checklist?.checklist, checklistLoading };
};
