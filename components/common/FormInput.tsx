import { ValidationResult } from '@/utils/sign';
import React from 'react';
import { Form } from 'react-bootstrap';

interface FormInputProps {
  htmlFor: string;
  type: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  result?: ValidationResult;
}

export default function FormInput({
  htmlFor,
  label,
  value,
  onChange,
  type,
  result,
}: FormInputProps) {
  return (
    <Form>
      <Form.Label htmlFor={htmlFor} className="d-block mb-1">
        {label}
      </Form.Label>

      <Form.Control
        type={type}
        id={htmlFor}
        className="p-3 border"
        value={value}
        onChange={onChange}
      />

      <Form.Text className={`${result?.success ? 'text-success' : 'text-danger'} m-1`}>
        {result?.message}
      </Form.Text>
    </Form>
  );
}
