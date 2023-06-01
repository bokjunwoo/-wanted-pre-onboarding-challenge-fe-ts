import useInput from '@/components/hooks/useInput';
import { IReviewEdit } from '@/pages/api/api';
import { reviewEdit } from '@/pages/api/review';
import { userInfo } from '@/pages/api/sign';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import TextareaAutosize from 'react-textarea-autosize';
import AlretModal from '@/components/modal/AlertModal';
import { ERROR_MESSAGE } from '@/constants/message';

interface ReviewEditProps {
  value?: string;
  autoFocus?: boolean;
  minRows?: number;
  _id: string;
  setEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ReviewEdit({
  value,
  autoFocus,
  minRows,
  _id,
  setEdit,
}: ReviewEditProps) {
  const queryClient = useQueryClient();

  const { data: user } = useQuery(['user'], userInfo);

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [text, onChangeText, setText] = useInput(value as string);
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (autoFocus && textareaRef.current && value) {
      textareaRef.current.focus();
      textareaRef.current.setSelectionRange(value.length, value.length);
    }
  }, [autoFocus, value]);

  const mutationEdit = useMutation(['review'], reviewEdit, {
    onMutate() {
      if (!user) return;
      // queryClient.setQueryData<IReviewInfo>(['review'], (data) => {

      // });
    },
    onSuccess() {
      setText('');
      setEdit(false);
    },
    onSettled() {
      queryClient.refetchQueries(['review']);
    },
  });

  const onSubmitReviewEdit = useCallback(
    (data: IReviewEdit) => {
      const { _id, user, text } = data;
      if (text.length === 0) {
        setShow(true);
        setMessage(ERROR_MESSAGE.NO_REVIEW_WRITE);
        return;
      }
      mutationEdit.mutate({ _id, user, text });
    },
    [mutationEdit],
  );

  return (
    <>
      <Form>
        <div className="form-floating">
          <TextareaAutosize
            className="form-control"
            id="floatingTextarea"
            value={text}
            ref={textareaRef}
            minRows={minRows}
            onChange={onChangeText}
          />
          <label htmlFor="floatingTextarea">내용</label>
        </div>

        <div className="d-flex justify-content-end">
          <Button
            size="sm"
            className="mt-2 mb-4"
            variant="outline-primary"
            type="button"
            onClick={() => {
              onSubmitReviewEdit({ _id, user, text });
            }}
          >
            수정
          </Button>
        </div>
      </Form>

      <AlretModal show={show} setShow={setShow} message={message} />
    </>
  );
}
