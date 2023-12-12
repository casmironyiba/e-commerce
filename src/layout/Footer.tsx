
'use client';
import styled from 'styled-components';
import React from 'react'
import displayFlex from '@/fp/displayFlex';
import boxProperty from '@/fp/boxProperty';
import remsize from '@/fp/remsize';
import { colors } from '@/components/Themes';
import Link from "next/link";

const Container = styled.div`
${boxProperty(`100%`,'100%')};
${displayFlex('space-around', `center`,`row nowrap`)};
  grid-area:f;
  height:100%;
  background: ${colors.$black};
`;

const Ul = styled.ul`
  ${boxProperty(`80%`,'50%',`auto`,remsize(10), colors.$black)};
  ${displayFlex('space-around', `center`,`row nowrap`)};
  color: ${colors.$white};
  list-style:none;
  border-bottom: 1px solid ${colors.$white};
  
`

const Li = styled.li`
  a {
    text-decoration:none;
    color: ${colors.$white};

    }

`
export default function Footer() {
  return (
    <Container>
      <Ul>

        <Li>
          <Link href='/contacts'>
          Contacts
          </Link>
        </Li>

        <Li>
          <Link href='/about'>
            About
          </Link>
        </Li>

        <Li>
          <Link href='/help'>
            Help
          </Link>
        </Li>
        <Li>
          <Link href='/developer'>
            Developer
          </Link>
        </Li>

      </Ul>
    </Container>
  )
}
