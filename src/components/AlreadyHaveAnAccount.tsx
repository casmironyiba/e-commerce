import React from 'react'
import Link from 'next/link';
import styled from 'styled-components';


export default function AlreadyHaveAbAccount() {
  return (
    <Container>
        <P>
          Already a have an account ? <Link href='/auth/signin'>Sign In</Link>
        </P>
    </Container>
  )
};

const Container = styled.div``;
const P = styled.p``;
