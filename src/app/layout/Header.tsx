'use client';
import Logo from '@/components/Logo';
import NavBar from '@/components/NavBar';
import styled from 'styled-components';
import React, {useState} from 'react'
import boxProperty from '@/fp/boxProperty';
import remsize from '@/fp/remsize';
import Themes from '@/fp/themes';
import displayFlex from '@/fp/displayFlex';
import SearchItems from '@/components/SearchItems';
import {mediaQueries} from '@/fp/mediaQueries';
import Hamburger from '@/components/Hamburger';
import { colors } from '@/components/Themes'

export default function Header() {
  const [isNavBarOpen, setIsNavBarOpen] = useState(false)
  return ( 
    <Container>
      <Wrapper>
        <Logo /> 
        <SearchItems />
        <NavBar isNavBarOpen={isNavBarOpen}/> 
        <Hamburger isNavBarOpen={isNavBarOpen} setIsNavBarOpen={setIsNavBarOpen} />
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  grid-area:h;
  ${mediaQueries('mobileS')(`
    ${boxProperty(`100%`,`100%`,'',remsize(0),Themes.$dark)};
    ${displayFlex(`space-between`,'center','column nowrap')};
    position: relative;
    padding: 0;

    #searchItems {
      position: relative;
      top:75px;
      right:40px;
    }
  `)};

  ${mediaQueries('tablet')(`
    #searchItems {
      position: relative;
      top: 0px;
    }
  `)};

  ${mediaQueries('laptop')(`
    // #signIn:hover {
    // position:relative;
      // }

  `)};


`;

const Wrapper = styled.div`
  ${mediaQueries('mobileS')(`
    ${boxProperty(`100%`,`50%`,``,remsize(10),colors.$dark)};
    ${displayFlex(`space-between`,'center','row nowrap')};
  `)};

  ${mediaQueries('tablet')(`
    height:100%;

  `)};
`;

