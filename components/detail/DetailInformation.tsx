import React from 'react';
import { Card, CloseButton } from 'react-bootstrap';

interface DetailInformationProps {
  onClickMoreInformation: () => void;
  overview?: string;
}

export default function DetailInformation({
  onClickMoreInformation,
  overview,
}: DetailInformationProps) {
  return (
    <Card className="mt-4">
      <Card.Body>
        {overview ? (
          <Card.Text
            className="m-0"
            dangerouslySetInnerHTML={{ __html: overview }}
          ></Card.Text>
        ) : (
          <Card.Text className="m-0">상세 정보가 없습니다.</Card.Text>
        )}

        <div className="d-flex justify-content-end">
          <CloseButton onClick={onClickMoreInformation} />
        </div>
      </Card.Body>
    </Card>
  );
}
