import styled from 'styled-components';
import { Card, ToastContainer } from 'react-bootstrap';

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

export const Preparation = styled.div`
  margin: 0 auto;
  cursor: pointer;
  img {
    display: block;
    max-width: 100%;
  }
`;

export const AccordionCustom = styled.div`
  .accordion-button:not(.collapsed) {
    color: #ffffff;
    background-color: #198754;
    box-shadow: inset 0 -1px 0 rgb(0 0 0 / 13%);
  }
  .accordion-button:focus,
  .accordion-button:active {
    outline: none !important;
    box-shadow: none !important;
    -webkit-box-shadow: none !important;
  }
  input[type='checkbox']:checked {
    background: #198754;
    border-color: #198754;
  }
`;

export const Stars = styled.div`
  display: flex;

  & svg {
    color: gray;
    cursor: pointer;
  }

  :hover svg {
    color: #ffd400;
  }

  & svg:hover ~ svg {
    color: gray;
  }

  .yellowStar {
    color: #ffd400;
  }
`;

export const CenterToast = styled(ToastContainer)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ParentLoadingSpinner = styled.div`
  position: relative;
  width: 100%;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TabContainer = styled.div`
  .nav-pills .nav-link {
    color: #198754;
  }
  .nav-pills .nav-link.active {
    color: #fff;
    background-color: #198754;
  }
`;

export const NumberBox = styled.div`
  width: 25px;
  height: 25px;
  border: 1px solid black;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputTitle = styled.input`
  width: 100%;
  height: 72px;
  font-size: 30px;
  font-weight: bold;
  border: 0;
  border-radius: 15px;
  outline: none;
  padding-left: 10px;
  background-color: rgb(233, 233, 233);
`;

export const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #cccccc;
  margin: 10px 10px 0px 0px;
`;

export const ReviewImageSize = styled.img`
  width: 100px;
  height: 100px;
`;

export const ImageDelete = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 30px;
  border-top: 1px solid #cccccc;
  cursor: pointer;
`;
