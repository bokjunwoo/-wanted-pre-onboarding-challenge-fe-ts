import useInput from '@/components/hooks/useInput';
import { IReviewInfo } from '@/pages/api/api';
import { reviewAdd } from '@/pages/api/review';
import { userInfo } from '@/pages/api/sign';
import { Stars } from '@/styles/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import TextareaAutosize from 'react-textarea-autosize';

interface ReviewWriteProps {
  value?: string;
  autoFocus?: boolean;
  minRows?: number;
}

const starArr = [0, 1, 2, 3, 4];

export default function ReviewWrite({
  value,
  autoFocus,
  minRows,
}: ReviewWriteProps) {
  const queryClient = useQueryClient();

  const { data: user } = useQuery(['user'], userInfo);

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [text, onChangeText, setText] = useInput('');
  const [starclicked, setStarClicked] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const handleStarClick = (index: number) => {
    let clickStates = [...starclicked];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setStarClicked(clickStates);
  };

  useEffect(() => {
    if (autoFocus && textareaRef.current && value) {
      textareaRef.current.focus();
      textareaRef.current.setSelectionRange(value.length, value.length);
    }
  }, []);

  const mutationAdd = useMutation(['review'], reviewAdd, {
    onMutate() {
      if (!user) return;
      // queryClient.setQueryData<IReviewInfo>(['review'], (data) => {

      // });
    },
    onSuccess() {
      setText('');
    },
    onSettled() {
      queryClient.refetchQueries(['review']);
    },
  });

  const onSubmitReview = useCallback((user: string, text: string) => {
    mutationAdd.mutate({ user, text });
  }, []);

  return (
    <Form>
      <Stars className="mt-3 mb-3 justify-content-center">
        {starArr.map((v, i) => {
          return (
            <FontAwesomeIcon
              key={i}
              size="xl"
              icon={faStar}
              onClick={() => {
                handleStarClick(v);
              }}
              className={starclicked[v] ? 'yellowStar' : undefined}
            />
          );
        })}
      </Stars>
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
          className="mt-2"
          variant="outline-primary"
          type="button"
          onClick={() => {
            onSubmitReview(user, text);
          }}
        >
          등록
        </Button>
      </div>
    </Form>
  );
}
