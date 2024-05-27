import React from 'react'
import styles from '@/styles/components/homecontent.module.scss'
import HomeLayout1 from './HomeLayout1'
import ItemCard from './ItemCard'

export default function HomeContent() {
  return (
    <div className={styles.homecontent}>
      <div className={styles.homecontentWrapper}>
        <div className={styles.layout1}>
          <HomeLayout1 />
        </div>

        <div className={styles.layout2}>
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
        </div>
      </div>
    </div>
  )
}
