'use client'
import styled from "styled-components"

const Container = styled.div``;


export default function SignInLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Container>
      {children}
    </Container>
  )
}
