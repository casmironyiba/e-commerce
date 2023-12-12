import boxProperty from '@/fp/boxProperty';
import displayFlex from '@/fp/displayFlex';
import remsize from '@/fp/remsize';
import React from 'react'
import styled from 'styled-components'
import SiteName from '@/components/siteName';
import { mediaQueries } from '@/fp/mediaQueries';
import Link from 'next/link';

const Container = styled.div`
  ${mediaQueries(`mobileS`)(`
    ${boxProperty(remsize(120),remsize(50))};
    ${displayFlex(`center`,`center`)};
    background:white;
    font-size:1.4rem;
    color:black;
    border:2px solid white;

    a {
        text-decoration: none;
      }

  `)}
`;

export default function Logo() {
  return (
    <Container>
      <Link href="/">
        { SiteName } 
      </Link>
    </Container>
  )
}
