import React from 'react'
import { ListGroup } from 'react-bootstrap';
import ReviewContent from './ReviewContent';

export default function Review() {
  return (
    <ListGroup variant="flush" className='mt-4'>
      {
        Array.from({length: 6}).map((_, i) => {
          return <ReviewContent key={i}/>
        })
      }
      <ListGroup.Item></ListGroup.Item>
    </ListGroup>
  )
}
