
import React from 'react'
import Link from 'next/link';
import styled from 'styled-components';


export default function AdminAlreadyHaveAnAccount() {
  return (
    <Container>
        <P>
          Already a have an account ? <Link href='/auth/adminsignin'>Admin Sign In</Link>
        </P>
    </Container>
  )
};

const Container = styled.div``;
const P = styled.p``;
