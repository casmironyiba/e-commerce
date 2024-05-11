import React from 'react'
import SiteName from '@/components/siteName';
import Link from 'next/link';
import styles from '../styles/components/logo.module.scss'


export default function Logo() {
  return (
    <div className={styles.logo}>
      <Link href="/">
        { SiteName } 
      </Link>
    </div>
  )
}
