import { useChecklistData } from '@/usequery/useChecklist';
import ChecklistAccordion from './ChecklistAccordion';
import ParentLoading from '../common/ParentLoading';

export const ChecklistSection = () => {
  const { checklist, checklistLoading } = useChecklistData();

  if (checklistLoading) {
    return <ParentLoading />;
  }

  return <ChecklistAccordion checklist={checklist?.content || []} />;
};
