import React from 'react';
import { ParentLoadingSpinner } from '@/styles/styled';
import { Spinner } from 'react-bootstrap';

export default function ParentLoading() {
  return (
    <ParentLoadingSpinner>
      <Spinner animation="border" variant="success" />
    </ParentLoadingSpinner>
  );
}
