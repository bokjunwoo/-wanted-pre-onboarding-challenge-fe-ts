import React from 'react';
import { Accordion } from 'react-bootstrap';
import { ChecklistContent } from '@/pages/checklist/[userId]';
import { AccordionCustom } from '@/styles/styled';
import ChecklistAccordionTitle from './ChecklistAccordionTitle';

export default function ChecklistAccordion({
  checklist,
}: {
  checklist: ChecklistContent[];
}) {
  return (
    <AccordionCustom className="mb-4">
      <Accordion
        defaultActiveKey="0"
        flush
        alwaysOpen
        className="m-auto col-lg-6 col-md-8"
      >
        {checklist.map((v, i) => {
          return (
            <ChecklistAccordionTitle
              title={v.title}
              items={v.items}
              index={i}
              key={v.title}
            />
          );
        })}
      </Accordion>
    </AccordionCustom>
  );
}
