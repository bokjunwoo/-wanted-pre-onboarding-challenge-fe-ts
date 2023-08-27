import React from 'react';
import { Accordion } from 'react-bootstrap';
import { AccordionCustom } from '@/styles/styled';
import ChecklistAccordionTitle from './ChecklistAccordionTitle';
import { ChecklistContent } from '@/usequery/useChecklist';

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
        className="m-auto col-md-8 col-sm-10"
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
