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

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;

  ul {
    list-style: none;

    li {
      display: inline-block;
      width: 30px;
      height: 30px;
      border: 1px solid #e2e2e2;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1rem;
      padding: 1rem;

      &:first-child {
        border-radius: 5px 0 0 5px;
      }

      &:last-child {
        border-radius: 0 5px 5px 0;
      }

      a {
        text-decoration: none;
        color: #198754;
        font-size: 1rem;

        &:hover,
        &.active {
          color: black;
        }
      }

      &.active {
        background-color: #198754;

        a {
          color: white;
        }
      }
    }
  }

  .page-selection {
    width: 48px;
    height: 30px;
    color: #198754;
  }
`;
