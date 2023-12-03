'use client';
import Logo from '@/components/Logo';
import NavBar from '@/components/NavBar';
import styled from 'styled-components';
import React from 'react'

const Container = styled.main`
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
