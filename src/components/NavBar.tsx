import React, {FC, useEffect, useState } from 'react'
import SignInLink from './signInLink'
import OrderLink from './OrderLink'
import CartLink from './CartLink'
import styles from '../styles/components/navBar.module.scss';

interface NavBarProps {
  isNavBarOpen: boolean;
}
const NavBar:FC<NavBarProps> = ({isNavBarOpen}) => {
  // const [isNavBarOpen, setIsNavBarOpen] = useState(false)
useEffect(() =>{
  console.log('NavBar isNavBarOpen:', isNavBarOpen);

  },[isNavBarOpen])

  return (
    <div id="navbarWrapper" className={isNavBarOpen ? styles.navbarOpen : styles.navbar}>
      <div className={styles.navbarWrapper}>
        <SignInLink />
        <OrderLink />
        <CartLink />
      </div>
    </div>
  )
};

export default NavBar;


