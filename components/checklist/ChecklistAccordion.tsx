import React from 'react';
import { Accordion, Button, InputGroup, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { ChecklistContent } from '@/pages/checklist/[userId]';

export default function ChecklistAccordion({
  checklist,
}: {
  checklist: ChecklistContent[];
}) {
  return (
    <AccordionCustom className='mb-4'>
      <Accordion
        defaultActiveKey="0"
        flush
        alwaysOpen
        className="m-auto col-lg-6 col-md-8"
      >
        {checklist.map((v, i) => {
          return (
            <Accordion.Item eventKey={i.toString()} key={i}>
              <Accordion.Header>{v.title}</Accordion.Header>
              <Accordion.Body className="text-start">
                <Form>
                  {v.items.map((v) => {
                    return (
                      <Form.Check
                        type="checkbox"
                        key={v.id}
                        className="d-flex justify-content-between"
                        onChange={() => {}}
                      >
                        <div>
                          <Form.Check.Input
                            type="checkbox"
                            className="me-2"
                            defaultChecked={v.checked}
                          />
                          <Form.Check.Label>{v.item}</Form.Check.Label>
                        </div>

                        <FontAwesomeIcon icon={faTrash} />
                      </Form.Check>
                    );
                  })}
                  <InputGroup className="mt-3">
                    <Form.Control type="text" placeholder="아이템 추가하기" />
                    <Button variant="success" id="button-addon2">
                      추가
                    </Button>
                  </InputGroup>
                </Form>
              </Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </AccordionCustom>
  );
}

const AccordionCustom = styled.div`
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
