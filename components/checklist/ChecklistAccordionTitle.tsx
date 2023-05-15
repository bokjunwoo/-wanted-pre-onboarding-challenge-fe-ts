import { checklistAdd } from '@/pages/api/checklist';
import { Checklist, ChecklistContent } from '@/pages/checklist/[userId]';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React, { useCallback } from 'react';
import { Accordion, Form, InputGroup, Button } from 'react-bootstrap';
import useInput from '../hooks/useInput';
import { userInfo } from '@/pages/api/sign';
import ChecklistAccordionItem from './ChecklistAccordionItem';

export default function ChecklistAccordionTitle({
  title,
  items,
  index,
}: ChecklistContent) {
  const queryClient = useQueryClient();

  const { data: user } = useQuery(['user'], userInfo);

  const [text, onChangeText, setText] = useInput('');

  const mutationAdd = useMutation(['checklist'], checklistAdd, {
    onMutate() {
      if (!user) return;
      queryClient.setQueryData<Checklist>(['checklist'], (data) => {
        const newData = data?.checklist.content || [];
        const matchingItem = newData.find(
          (itemContent: ChecklistContent) => itemContent.title === title,
        );
        if (matchingItem) {
          if (!matchingItem.items) {
            matchingItem.items = [];
          }
          matchingItem.items.push({ item: text, checked: false });
        }
        return {
          _id: '',
          nickname: '',
          checklist: { content: newData },
        };
      });
    },
    onSuccess() {
      setText('');
    },
    onSettled() {
      queryClient.refetchQueries(['checklist']);
    },
  });

  const onSubmitItem = useCallback(
    (title: string, item: string) => {
      if (text.length === 0) return alert('글 작성필요');
      mutationAdd.mutate({ title, item, user });
    },
    [text, mutationAdd, user],
  );

  return (
    <Accordion.Item eventKey={index.toString()}>
      <Accordion.Header>{title}</Accordion.Header>
      <Accordion.Body className="text-start">
        <Form>
          {items.map((v, i) => {
            return (
              <ChecklistAccordionItem
                item={v.item}
                checked={v.checked}
                title={title}
                key={i}
              />
            );
          })}
          <InputGroup className="mt-3">
            <Form.Control
              type="text"
              placeholder="아이템 추가하기"
              value={text}
              onChange={onChangeText}
            />
            <Button
              variant="success"
              id="button-addon2"
              type="button"
              onClick={() => {
                onSubmitItem(title, text);
              }}
            >
              추가
            </Button>
          </InputGroup>
        </Form>
      </Accordion.Body>
    </Accordion.Item>
  );
}
