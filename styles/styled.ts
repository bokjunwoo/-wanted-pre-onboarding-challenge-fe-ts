import styled from 'styled-components';
import { Card } from 'react-bootstrap';

export const Container = styled(Card)`
  height: 450px;
  overflow: hidden;
`;

export const Cursor = styled.span`
  cursor: pointer;
`;

export const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const LoadingBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1001;
`;

export const LoadingPosition = styled.div`
  position: relative;
  z-index: 9999;
`;