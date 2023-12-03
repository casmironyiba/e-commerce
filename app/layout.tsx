"use client"
import Header from '@/layout/Header'
import Footer from '@/layout/Footer'
import SideBar from '@/layout/SideBar'
import NavBar from '@/components/NavBar'
import type { Metadata } from 'next'
import styled from 'styled-components'
import boxProperty from '@/fp/boxProperty'
import remsize from '@/fp/remsize'
import Themes from '@/fp/themes'
import StyledComponentsRegistry from '@/libs/styledRegistry'
import { ThemeProvider } from 'styled-components';
import {colors} from '@/components/Themes';
import { mediaQueries } from '@/fp/mediaQueries'
import Main  from '@/layout/Main';
import { useEffect } from 'react'


 const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const MainContainer = styled.div`
  box-sizing: border-box;
  display: grid;

  ${mediaQueries('mobileS')(`
    ${boxProperty(`100%`,remsize(1500),'auto','0px', colors.$red)};
    grid-template-columns:repeat(10, 1fr);
    grid-template-rows: 150px auto 400px;
    grid-template-areas:
      "h h h h h h h h h h"
      "m m m m m m m m m m"
      "f f f f f f f f f f";
  `)};

  ${mediaQueries('tablet')(`
    grid-template-rows: 80px auto 400px;

  `)};

  ${mediaQueries('laptop')(`
    ${boxProperty(`100%`,remsize(1500),'auto','0px', colors.$red)};
    grid-template-columns:repeat(10, 1fr);
    // grid-template-rows: 100px auto 400px;
    grid-template-areas:
      "h h h h h h h h h h"
      "m m m m m m m m m m"
      "f f f f f f f f f f";

  `)}

`;
const styles = `
  * {
    box-sizing: border-box;
    margin:0;
    padding:0;
  }

`;


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
   useEffect(() => {
    const styleTag = document.createElement('style');
    styleTag.innerHTML = styles;
    document.head.appendChild(styleTag)
   })

  return (
    <StyledComponentsRegistry>
        <html lang="en">
          <body>
            <MainContainer>
              <Header />
              <Main>
                {children}
              </Main>
              <Footer />
            </MainContainer>
          </body>
        </html>
    </StyledComponentsRegistry>
  )
}