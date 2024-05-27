
'use client';
import HomeContent from '@/components/HomeContent';
import HomePopup from '@/components/HomePopup';
import styles from '@/styles/pages/home.module.scss';
import React, {useEffect, useRef} from 'react'



export default function Home() {
  return (
  <div className={styles.home}>
    <div className={styles.homeWrapper}>
      <HomeContent />
    </div>
  </div>
  )
}
