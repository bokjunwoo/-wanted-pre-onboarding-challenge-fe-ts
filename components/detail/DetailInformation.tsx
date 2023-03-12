import React from 'react';
import { Card, CloseButton } from 'react-bootstrap';

interface DetailInformationProps {
  onClickMoreInformation: () => void;
}

export default function DetailInformation({
  onClickMoreInformation,
}: DetailInformationProps) {
  return (
    <Card className="mt-4">
      <Card.Body>
        <Card.Text className="m-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
          veritatis excepturi accusamus odio laboriosam delectus suscipit
          aperiam quae aspernatur eum, ea autem voluptas cum, consequatur unde
          quibusdam exercitationem iure eius? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Magnam veritatis excepturi accusamus
          odio laboriosam delectus suscipit aperiam quae aspernatur eum, ea
          autem voluptas cum, consequatur unde quibusdam exercitationem iure
          eius? Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
          veritatis excepturi accusamus odio laboriosam delectus suscipit
          aperiam quae aspernatur eum, ea autem voluptas cum, consequatur unde
          quibusdam exercitationem iure eius?
        </Card.Text>

        <div className="d-flex justify-content-end">
          <CloseButton onClick={onClickMoreInformation} />
        </div>
      </Card.Body>
    </Card>
  );
}
