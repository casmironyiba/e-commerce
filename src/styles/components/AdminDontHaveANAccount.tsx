
import React from 'react'
import Link from 'next/link';
import styles from '@/styles/components/dontHaveAnAccount.module.scss';


export default function AdminDontHaveAnAccount() {
  return (
    <div className={styles.dontHaveAnAccount}>
        <p>
          Dont have an account ? <Link href='/auth/adminsignup'>Admin Sign Up</Link>
        </p>
    </div>
  )
};
