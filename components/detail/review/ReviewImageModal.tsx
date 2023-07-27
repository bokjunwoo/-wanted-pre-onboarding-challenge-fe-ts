import React, { useEffect, useState } from 'react';
import { Button, Carousel, Modal } from 'react-bootstrap';
import styled from 'styled-components';

interface IReviewImageModal {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  image: string[];
  index: number;
}

export default function ReviewImageModal({
  show,
  setShow,
  image,
  index,
}: IReviewImageModal) {
  useEffect(() => {
    setImageIndex(index);
  }, [index]);

  const [imageIndex, setImageIndex] = useState(index);

  const handleSelect = (selectedIndex: number) => {
    setImageIndex(selectedIndex);
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <Modal show={show} aria-labelledby="example-modal-sizes-title-sm" centered>
      <Modal.Header>
        <Modal.Title id="example-modal-sizes-title-sm">
          <img
            src="/images/Logo.png"
            style={{ width: '30px' }}
            alt="로고"
          ></img>
          TripLog
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="p-0">
        <Carousel
          slide={false}
          interval={null}
          activeIndex={imageIndex}
          onSelect={handleSelect}
          className="carousel-dark slide"
        >
          {image?.map((v) => {
            return (
              <Carousel.Item key={v}>
                <ReviewImageModalSize
                  src={`http://localhost:4000/${v}`}
                  alt={v}
                />
              </Carousel.Item>
            );
          })}
        </Carousel>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="outline-danger" size="sm" onClick={handleClose}>
          취소
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

const ReviewImageModalSize = styled.img`
  display: block;
  margin: auto;
  height: 500px;
  objectfit: 'contain';
`;
