import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

interface ContentProps {
  content: string;
  region?: string;
}

export default function SubPreparation({ content, region }: ContentProps) {
  return (
    <Preparation>
      {region ? (
        <Link href={`/${content}/${region}/테스트/1`}>
          <img src={`/images/submain/${content}.png`} alt={content} />
        </Link>
      ) : (
        <Link href={`/${content}/테스트`}>
          <img src={`/images/submain/${content}.png`} alt={content} />
        </Link>
      )}
    </Preparation>
  );
}

const Preparation = styled.div`
  margin: 0 auto;
  img {
    display: block;
    max-width: 100%;
  }
`;
