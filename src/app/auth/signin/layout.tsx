'use client'
import { colors } from "@/components/Themes";
import boxProperty from "@/fp/boxProperty";
import displayFlex from "@/fp/displayFlex";
import { mediaQueries } from "@/fp/mediaQueries";
import remsize from "@/fp/remsize";
import styled from "styled-components"


export default function SignInLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Container>
        <Div>
          <H1>
            Sign In
          </H1>
        </Div>
        {children}
    </Container>
  )
};

const Container  = styled.div`
  ${mediaQueries('mobileS')(`
  ${displayFlex(`space-between`,`center`,`column nowrap`)};
  ${boxProperty(remsize(300), remsize(500),'auto',remsize(0))};
  // border:1px solid ${colors.$light};
  box-shadow: 3px 3px 5px;

  `)};

  ${mediaQueries('laptop')(`
    width: ${remsize(350)};

  `)};
`;

const Wrapper = styled.div`
  ${mediaQueries('mobileS')(`
  `)};
`;

const Div = styled.div`
  ${boxProperty('100%', `40%`,`auto`,remsize(5),colors.$blue)};
`;

const H1= styled.div`
  ${boxProperty('100%', remsize(100),``,remsize(5))};
  ${displayFlex(`center`,`center`)};
  color: ${colors.$white};
  font-size:1.5rem;
  font-weight:600;
`;
