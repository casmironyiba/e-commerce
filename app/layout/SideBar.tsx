
'use client';
import Logo from '@/components/Logo';
import NavBar from '@/components/NavBar';
import styled from 'styled-components';
import React from 'react'
import boxProperty from '@/fp/boxProperty';
import remsize from '@/fp/remsize';
import { mediaQueries } from '@/fp/mediaQueries';

const Container = styled.div`
  ${mediaQueries('mobileS')(`
    // ${boxProperty(`100%`, `100%`)};
    display:none;
    grid-area:a;
    background: yellow;

  `)}

  ${mediaQueries('laptop')(`
    display:inline-block;
  `)}
`;

export default function SideBar() {
  return (
  <Container>
  </Container>
  )
}
