import { useChecklistData } from '@/usequery/useChecklist';
import ChecklistAccordion from './ChecklistAccordion';
import LoadingSpinner from '../common/LoadingSpinner';

export const ChecklistSection = () => {
  const { checklist, checklistLoading } = useChecklistData();

  if (checklistLoading) {
    return <LoadingSpinner />;
  }

  return <ChecklistAccordion checklist={checklist?.content || []} />;
};
