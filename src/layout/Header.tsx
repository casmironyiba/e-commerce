'use client';
import Logo from '@/components/Logo';
import NavBar from '@/components/NavBar';
import React, {useState} from 'react'
import SearchItems from '@/components/SearchItems';
import Hamburger from '@/components/Hamburger';
import styles from '../styles/layouts/header.module.scss';
// import CartLink from '@/components/CartLink'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined'

export default function Header() {
  const [isNavBarOpen, setIsNavBarOpen] = useState(false)
  return ( 
    <div className={styles.header}>
      <div className={styles.headerWrapper}>
        <Logo /> 
        <SearchItems />
        <NavBar isNavBarOpen={isNavBarOpen}/> 
        <ShoppingCartIcon 
          className={styles.shoppingcartIcon}
          sx={{
            color:'white',
            background:'#333333'
            }}
        />
        <Hamburger isNavBarOpen={isNavBarOpen} setIsNavBarOpen={setIsNavBarOpen} />
      </div>
    </div>
  )
}


