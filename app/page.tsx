
'use client';
import Logo from '@/components/Logo';
import NavBar from '@/components/NavBar';
import styled from 'styled-components';
import React from 'react'
import boxProperty from '@/fp/boxProperty';

const MainContainer = styled.div`
  grid-area:m;
  background:blue;
`;

export default function layout() {
  return (
  <MainContainer>
    main:
  </MainContainer>
  )
}
