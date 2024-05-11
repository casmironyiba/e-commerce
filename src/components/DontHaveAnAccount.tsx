
import React from 'react'
import Link from 'next/link';
import styles from '@/styles/components/dontHaveAnAccount.module.scss';


export default function DontHaveAnAccount() {
  return (
    <div className={styles.dontHaveAnAccount}>
        <p>
          Dont have an account ? <Link href='/auth/signup'>Sign Up</Link>
        </p>
    </div>
  )
};

