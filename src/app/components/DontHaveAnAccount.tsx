
import React from 'react'
import Link from 'next/link';
import styled from 'styled-components';


export default function DontHaveAnAccount() {
  return (
    <Container>
        <P>
          Dont have an account ? <Link href='/auth/signup'>Sign Up</Link>
        </P>
    </Container>
  )
};

const Container = styled.div``;
const P = styled.p``;
