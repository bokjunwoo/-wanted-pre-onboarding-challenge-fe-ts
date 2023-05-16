import { checklistCkecked, checklistDelete } from '@/pages/api/checklist';
import { userInfo } from '@/pages/api/sign';
import {
  Checklist,
  ChecklistContent,
  ChecklistItem,
} from '@/pages/checklist/[userId]';
import { Cursor } from '@/styles/styled';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React from 'react';
import { Form } from 'react-bootstrap';

type ChecklistAccordionItem = ChecklistItem & {
  title: string;
};

export default function ChecklistAccordionItem({
  item,
  checked,
  title,
}: ChecklistAccordionItem) {
  const queryClient = useQueryClient();

  const { data: user } = useQuery(['user'], userInfo);

  const mutationDelete = useMutation(['checklist'], checklistDelete, {
    onMutate() {
      if (!user) return;
      queryClient.setQueryData<Checklist>(['checklist'], (data) => {
        const newData = data?.checklist.content || [];
        const deleteData = newData.map((itemContent: ChecklistContent) => {
          if (itemContent.title === title) {
            const deleteItems = itemContent.items.filter(
              (checklistItem: ChecklistItem) => checklistItem.item !== item,
            );
            return {
              ...itemContent,
              items: deleteItems,
            };
          }
          return itemContent;
        });
        return {
          _id: '',
          nickname: '',
          checklist: { content: deleteData },
        };
      });
    },
    onSettled() {
      queryClient.refetchQueries(['checklist']);
    },
  });

  const onSubmitDelete = (item: string) => {
    mutationDelete.mutate({ title, item, user });
  };

  const mutationCheck = useMutation(['checklist'], checklistCkecked, {
    onSettled() {
      queryClient.refetchQueries(['checklist']);
    },
  });

  const onSubmitChecked = (item: string, checked: boolean) => {
    mutationCheck.mutate({ title, item, checked, user });
  };

  return (
    <Form.Check type="checkbox" className="d-flex justify-content-between">
      <div>
        <Form.Check.Input
          type="checkbox"
          className="me-2"
          defaultChecked={checked}
          onChange={() => {
            onSubmitChecked(item, !checked);
          }}
        />
        <Form.Check.Label>{item}</Form.Check.Label>
      </div>

      <Cursor onClick={() => onSubmitDelete(item)}>
        <FontAwesomeIcon icon={faTrash} />
      </Cursor>
    </Form.Check>
  );
}
