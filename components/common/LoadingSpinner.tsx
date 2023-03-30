import {
  LoadingBackdrop,
  LoadingContainer,
  LoadingPosition,
} from '@/styles/styled';
import { Spinner } from 'react-bootstrap';

export default function LoadingSpinner() {
  return (
    <LoadingContainer>
      <LoadingBackdrop />
      <LoadingPosition>
        <Spinner animation="border" variant="success" />
      </LoadingPosition>
    </LoadingContainer>
  );
}
