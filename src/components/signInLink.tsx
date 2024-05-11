import React from 'react'
import Link from 'next/link';
import styles from '../styles/components/signinLink.module.scss';

export default function SignInLink() {
  return (
    <ul className={styles.signinLink}>
      <li>
        <Link href="/auth/signin">
          Hello, sign in
        </Link>
      </li>
    </ul>
  )
};


