import boxProperty from '@/fp/boxProperty';
import displayFlex from '@/fp/displayFlex';
import remsize from '@/fp/remsize';
import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import { mediaQueries } from '@/fp/mediaQueries';
import Animations from '@/fp/animations';


export default function SearchItems(){
  return (
    <Form id='searchItems'>
      <Input type='text' placeholder='Search products of any brand' /> 
      <Button>
      <SearchIcon
        sx={{fontSize:40}}
      />
      </Button>
    </Form>
  )
};

const Form = styled.form`
  ${mediaQueries(`mobileS`)(`
    ${boxProperty(remsize(250),remsize(50),'auto',remsize(0))};
    ${displayFlex(`flex-start`,`center`,'row nowrap')};
    background:blue;

  `)}

  ${mediaQueries(`mobileL`)(`
    width: ${remsize(400)};
  `)};

  ${mediaQueries(`tablet`)(`

  `)}

  ${mediaQueries(`laptop`)(`
    width: ${remsize(400)};

  `)};

  ${mediaQueries(`laptopM`)(`
    width: ${remsize(500)};

  `)};

  ${mediaQueries(`laptopL`)(`
    width: ${remsize(600)};

  `)}
`;
const Input  = styled.input`
  ${mediaQueries(`mobileS`)(`
    ${boxProperty(remsize(200),`100%`)};
    text-align: center;
    font-size: 1rem;
    border:none;
    outline:none;
  `)}

  ${mediaQueries(`mobileL`)(`
    width: ${remsize(400)};
  `)};

  ${mediaQueries(`laptop`)(`
    width: ${remsize(400)};
    animation-play-state: paused;
    &:hover {
        ${Animations(`scaling`,`.3s`,`ease-in-out`,`forwards`)};
        animation-play-state: running;
        @keyframes scaling {
            0% {scale:1}
            100% {scale:1.1}
          }
      }
  `)};

  ${mediaQueries(`laptopL`)(`
    width: ${remsize(500)};
  `)}
`;

const Button = styled.button`
  ${mediaQueries(`mobileS`)(`
    ${boxProperty(remsize(100), remsize(60))};
    background:palevioletred;
  `)};

  ${mediaQueries(`laptop`)(`
    width: ${remsize(100)};
  `)};

`;
