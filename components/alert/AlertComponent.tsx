import React from 'react';
import { Alert } from 'react-bootstrap';

interface IAlertProps {
  message: string;
  variant: string;
}

export default function AlertComponent({ message, variant }: IAlertProps) {
  return <Alert variant={variant}>{message}</Alert>;
}
