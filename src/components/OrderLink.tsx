import React from 'react'
import Link from 'next/link';
import ArrowDownIcon from '@mui/icons-material/KeyboardArrowDownOutlined'
import styles from '../styles/components/orderLink.module.scss';


export default function OrderLink() {
  return (
    <ul className={styles.orderLinkContainer} id='orderLinkContainer'>
      <li>
        <Link href='/order'>
          Returns & Orders
          <ArrowDownIcon />
        </Link>
      </li>
    </ul> 
  )
};


