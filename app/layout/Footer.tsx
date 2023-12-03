
'use client';
import Logo from '@/components/Logo';
import NavBar from '@/components/NavBar';
import styled from 'styled-components';
import React from 'react'
import displayFlex from '@/fp/displayFlex';
import boxProperty from '@/fp/boxProperty';
import remsize from '@/fp/remsize';
import { colors } from '@/components/Themes';

const Container = styled.div`
${boxProperty(`100%`,'100px')};
${displayFlex('space-around', `center`,`row nowrap`)};
  grid-area:f;
  height:100%;
  background: grey;
`;

const Ul = styled.ul`
  ${boxProperty(`70%`,'100px',`auto`,remsize(10), colors.$black)};
  ${displayFlex('space-around', `center`,`row nowrap`)};
  color: ${colors.$white};
  list-style:none;
  
`

const Li = styled.li`

`
export default function Footer() {
  return (
    <Container>
      <Ul>
        <Li>Contacts</Li>
        <Li>Abouts</Li>
        <Li>Help</Li>
        <Li>Developer</Li>
      </Ul>
    </Container>
  )
}
