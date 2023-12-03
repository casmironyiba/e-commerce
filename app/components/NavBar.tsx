import boxProperty from '@/fp/boxProperty'
import displayFlex from '@/fp/displayFlex'
import remsize from '@/fp/remsize'
import React, {FC, useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import ArrowDownIcon from '@mui/icons-material/KeyboardArrowDownOutlined'
import Link from 'next/link'
import { mediaQueries } from '@/fp/mediaQueries'
import SignInLink from './signInLink'
import OrderLink from './OrderLink'
import CartLink from './CartLink'
import { deflate } from 'zlib'
import { colors } from './Themes'
import Animations from '@/fp/animations'

interface NavBarProps {
  isNavBarOpen: boolean;
}
const NavBar:FC<NavBarProps> = ({isNavBarOpen}) => {
  // const [isNavBarOpen, setIsNavBarOpen] = useState(false)
useEffect(() =>{
  console.log('NavBar isNavBarOpen:', isNavBarOpen);

  },[isNavBarOpen])

  return (
    <Container  
      id="navBar"
      className={isNavBarOpen ? 'open' : ''}
    >
      <SignInLink />
      <OrderLink />
      <CartLink />


    </Container>
  )
};

export default NavBar;

const Container = styled.ul`
  ${mediaQueries('mobileS')(`
    list-style:none;
     display:none;
     position:relative;

      &.open {
        ${boxProperty(remsize(280), '400px', '', remsize(0),colors.$dark)};
        ${displayFlex(`space-around`, `center`,`column nowrap`)};
        position:absolute;
        top:80px;
        right:0;
        #menuOpenIcon {
          display:inline-block;
        };
        ${Animations('navAnime', `.3s`, `ease-in-out`,'forwards')};

        @keyframes navAnime {
          0% {right:-500px}
          100% {right:0}
        }


      }
  `)}

  ${mediaQueries('laptop')(`
    ${boxProperty(remsize(400), '100%', '', remsize(0))};
    ${displayFlex(`space-between`, `center`, 'row nowrap')};
    position:relative;
  `)};

  ${mediaQueries('laptopM')(`
    width: ${remsize(450)};
  `)};
`;

