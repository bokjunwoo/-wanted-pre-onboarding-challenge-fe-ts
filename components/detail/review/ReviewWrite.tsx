import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Form } from 'react-bootstrap';
import TextareaAutosize from 'react-textarea-autosize';

interface ReviewWriteProps {
  value?: string;
  autoFocus?: boolean;
  minRows?: number;
}

export default function ReviewWrite({
  value,
  autoFocus,
  minRows,
}: ReviewWriteProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (autoFocus && textareaRef.current && value) {
      textareaRef.current.focus();
      textareaRef.current.setSelectionRange(value.length, value.length);
    }
  }, []);

  const [text, setText] = useState<string | undefined>(value);
  const onChangeText = useCallback((e: any) => {
    setText(e.target.value);
  }, []);

  return (
    <Form className="mt-4">
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
    </Form>
  );
}
