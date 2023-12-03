import displayFlex from '@/fp/displayFlex';
import { mediaQueries } from '@/fp/mediaQueries';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import React, { useEffect, useRef,useState,FC } from 'react'
import styled from 'styled-components';
import NavBar from './NavBar';
import remsize from '@/fp/remsize';
import boxProperty from '@/fp/boxProperty';

interface HamburgerProps {
  isNavBarOpen: boolean;
  setIsNavBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Hamburger:FC<HamburgerProps> = ({ isNavBarOpen, setIsNavBarOpen }) => {
  const menuRef = useRef<any>(null);


  useEffect(() => {
    const handleMenuClick = () => {
      setIsNavBarOpen((prev) => !prev);
console.log('isNavBarOpen after click:', isNavBarOpen);
    };

    menuRef.current?.addEventListener('click', handleMenuClick);

    return () => {
      menuRef.current?.removeEventListener('click', handleMenuClick);
    };

  }, [setIsNavBarOpen,isNavBarOpen]);


      // console.log('isNavBarOpen:', isNavBarOpen);

const containerClass = isNavBarOpen ? 'open' : '';

  return (
    <Container 
      ref={menuRef}
      id='hamburger'
      className={containerClass}
    >
      <MenuIcon
        sx={{color:'white',fontSize:60}} 
        id='menuIcon'
        />
      <MenuOpenIcon
        sx={{color:'white',fontSize:60}}
        fontSize='large'
        id='menuOpenIcon'
        />
    </Container>
  )
};

export default Hamburger;

const Container = styled.div`
  ${mediaQueries('mobileS')(`
    ${boxProperty(remsize(80),remsize(60))};
    ${displayFlex('center','center')};
    cursor:pointer;

    #menuOpenIcon {
      display:none;
    }

    &.open {
      // display: none;

      #menuOpenIcon {
        display:inline-block;
      }
      #menuIcon {
        display:none;
      }
    }

  `)};

  ${mediaQueries('laptop')(`
      display:none;
    // #menuOpenIcon,#menuIcon {
    //   display:none;
    // }
  `)};
`;
