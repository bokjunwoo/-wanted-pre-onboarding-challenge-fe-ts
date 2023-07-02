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
import AlretModal from '@/components/modal/AlertModal';
import { ERROR_MESSAGE } from '@/constants/message';
import { useRouter } from 'next/router';
import ToastMessage from '@/components/toast/ToastMessage';

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

  const router = useRouter();
  const { region, id } = router.query as { region: string; id: string };

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
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState('');
  const [isLogin, setIsLogin] = useState(false);

  const star = starclicked.filter(Boolean).length;

  const handleStarClick = (index: number) => {
    if (user === null) {
      setIsLogin(true);
      return;
    }
    const clickStates = [...starclicked];
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
  }, [autoFocus, value]);

  const handleTextareaClick = () => {
    if (!user) {
      setIsLogin(true);
    }
  };

  const mutationAdd = useMutation(['fetchReview', id], reviewAdd, {
    onMutate() {
      queryClient.setQueryData<IReviewInfo[]>(['fetchReview', id], (data) => {
        const newReview = data ? [...data] : [];

        newReview.unshift({
          _id: '0',
          contentid: region,
          title: '',
          nickname: user,
          userImage: '',
          content: text,
          star,
          time: new Date(),
          region: '',
        });

        return newReview;
      });
    },

    onSuccess() {
      setText('');
      setStarClicked([false, false, false, false, false]);
      queryClient.refetchQueries(['fetchReview', id]);
    },
  });

  const onSubmitReviewAdd = useCallback(() => {
    if (!user) {
      setIsLogin(true);
      return;
    }
    if (star === 0) {
      setShow(true);
      setMessage(ERROR_MESSAGE.NO_STAR_RATING);
      return;
    }
    if (text.length === 0) {
      setShow(true);
      setMessage(ERROR_MESSAGE.NO_REVIEW_WRITE);
      return;
    }
    mutationAdd.mutate({ user, text, star, region, id });
  }, [mutationAdd, id, region, star, text, user]);

  return (
    <>
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
            onClick={handleTextareaClick}
          />
          <label htmlFor="floatingTextarea">내용</label>
        </div>

        <div className="d-flex justify-content-end">
          <Button
            size="sm"
            className="mt-2 mb-4"
            variant="outline-primary"
            type="button"
            onClick={onSubmitReviewAdd}
          >
            등록
          </Button>
        </div>
      </Form>

      <AlretModal show={show} setShow={setShow} message={message} />

      <ToastMessage
        variant="danger"
        show={isLogin}
        setShow={setIsLogin}
        message="로그인이 필요한 기능입니다."
      />
    </>
  );
}
