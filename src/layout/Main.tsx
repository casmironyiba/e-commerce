'use client';
import styled from 'styled-components';
import { mediaQueries} from '@/fp/mediaQueries';
import boxProperty from '@/fp/boxProperty';
import remsize from '@/fp/remsize';
import displayFlex from '@/fp/displayFlex';
import {colors} from '@/components/Themes';


const Container = styled.main`
  grid-area:m;
  ${mediaQueries('mobileS')(`
    ${boxProperty(`100%`,`100%`,'auto',remsize(0),colors.$white)};
    ${displayFlex(`space-between`,'center','column nowrap')};
    `)}

`;

export default function Main({
  children
  }: {children:React.ReactNode
    }) {
      return (
        <Container>
          {children}
        </Container>
      )
}
