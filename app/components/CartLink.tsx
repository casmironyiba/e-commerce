import React from 'react'
import Link from 'next/link';
import styled from 'styled-components'
import boxProperty from '@/fp/boxProperty';
import displayFlex from '@/fp/displayFlex';
import remsize from '@/fp/remsize';
import { mediaQueries } from '@/fp/mediaQueries';
import { colors } from './Themes'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined'

export default function CartLink() {
  return (

      <Container>
        <Link href='/cart'>
          <ShoppingCartIcon />
          Cart
        </Link>
      </Container>
  )
};


const Container= styled.div`
  ${boxProperty(remsize(120),remsize(50),remsize(10))};
  ${displayFlex(`center`,'center')};
  position:relative;
   a {
    ${boxProperty(`100%`,`80%`)};
  ${displayFlex(`center`,'center')};
     text-align:center;
    color:white;
    text-decoration:none;
   }

`;
