import React from 'react'
import Link from 'next/link';
import styled from 'styled-components'
import boxProperty from '@/fp/boxProperty';
import displayFlex from '@/fp/displayFlex';
import remsize from '@/fp/remsize';
import { mediaQueries } from '@/fp/mediaQueries';
import { colors } from './Themes'
import ArrowDownIcon from '@mui/icons-material/KeyboardArrowDownOutlined'
import Animations from '@/fp/animations';
import OpacityKeyframe from '@/fp/keyFrames';

export default function OrderLink() {
  return (
    <Container>
      <Li>
        <Link href='/order'>
          Returns & Orders
          <ArrowDownIcon />
        </Link>
      </Li>
    <Div>
      <h1>Hello Avatar</h1>
      <p>welcome avatar</p>
    </Div>
    </Container> 
  )
};

const Div = styled.div`
  ${boxProperty(remsize(300),remsize(200),'',remsize(5),colors.$purple)};
  ${displayFlex(`space-between`,`center`,`column nowrap`)};
  display:none;
  position:absolute;
  top:65px;
  left:-60px;



`;

const Container = styled.div`
  ${mediaQueries(`mobileS`)(`
    ${boxProperty(remsize(170),remsize(50))};
    position:relative;


  `)};

  ${mediaQueries(`laptop`)(`
     &:hover {
      position:relative;
      
       ${Div} {
        ${Animations(`OpacityKeyframe`, `1s`, `ease-in-out`, `forwards`)};
        ${OpacityKeyframe};
         display:inline-block;
         background:grey;
        position:absolute;

         }

       }
  `)}
`;

const Li= styled.li`
  ${boxProperty(`100%`,`100%`)};
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
