import React, { useCallback } from 'react';
import { Accordion, Button, InputGroup, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Checklist, ChecklistContent } from '@/pages/checklist/[userId]';
import { AccordionCustom } from '@/styles/styled';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { checklistAdd } from '@/pages/api/checklist';
import { userInfo } from '@/pages/api/sign';
import useInput from '../hooks/useInput';

export default function ChecklistAccordion({
  checklist,
}: {
  checklist: ChecklistContent[];
}) {
  const queryClient = useQueryClient();

  const { data: user } = useQuery(['user'], userInfo);

  return (
    <AccordionCustom className="mb-4">
      <Accordion
        defaultActiveKey="0"
        flush
        alwaysOpen
        className="m-auto col-lg-6 col-md-8"
      >
        {checklist.map((v, i) => {
          const [text, onChangeText, setText] = useInput('');

          const mutationChecked = useMutation(['checklist'], checklistAdd, {
            onMutate({ title }) {
              if (!user) return;
              queryClient.setQueryData<Checklist>(['checklist'], (data) => {
                const newData = data?.checklist.content || [];
                const matchingItem = newData.find(
                  (itemContent: ChecklistContent) =>
                    itemContent.title === title,
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
              mutationChecked.mutate({ title, item, user });
            },
            [text, mutationChecked, user],
          );

          return (
            <Accordion.Item eventKey={i.toString()} key={i}>
              <Accordion.Header>{v.title}</Accordion.Header>
              <Accordion.Body className="text-start">
                <Form>
                  {v.items.map((v, i) => {
                    return (
                      <Form.Check
                        type="checkbox"
                        key={i}
                        className="d-flex justify-content-between"
                        onChange={() => {}}
                      >
                        <div>
                          <Form.Check.Input
                            type="checkbox"
                            className="me-2"
                            defaultChecked={v.checked}
                          />
                          <Form.Check.Label>{v.item}</Form.Check.Label>
                        </div>

                        <FontAwesomeIcon icon={faTrash} />
                      </Form.Check>
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
                        onSubmitItem(v.title, text);
                      }}
                    >
                      추가
                    </Button>
                  </InputGroup>
                </Form>
              </Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </AccordionCustom>
  );
}
