'use client';
import styles from '../styles/layouts/main.module.scss';


export default function Main({
  children
  }: {children:React.ReactNode
    }) {
      return (
        <div className={styles.main}>
          {children}
        </div>
      )
}
