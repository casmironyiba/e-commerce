import React from 'react'
import Link from 'next/link';
import ArrowDownIcon from '@mui/icons-material/KeyboardArrowDownOutlined'
import styles from '../styles/components/orderLink.module.scss';


export default function OrderLink() {
  return (
    <div className={styles.orderLinkContainer}>
      <li>
        <Link href='/order'>
          Returns & Orders
          <ArrowDownIcon />
        </Link>
      </li>
    <div>
      <h1>Hello Avatar</h1>
      <p>welcome avatar</p>
    </div>
    </div> 
  )
};


