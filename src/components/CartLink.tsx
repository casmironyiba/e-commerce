import React from 'react'
import Link from 'next/link';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined'
import styles from '../styles/components/cart.module.scss';

export default function CartLink() {
  return (
    <ul className={styles.cartContainer}>
      <Link href='/cart'>
        <ShoppingCartIcon />
        Cart
      </Link>
    </ul>
  )
};


