
'use client';
import styled from 'styled-components';
import React from 'react'
import displayFlex from '@/fp/displayFlex';
import boxProperty from '@/fp/boxProperty';
import remsize from '@/fp/remsize';
import { colors } from '@/components/Themes';
import Link from "next/link";
import styles from '../styles/layouts/footer.module.scss';




export default function Footer() {
  return (
    <div className={styles.footer}>
      <ul>
        <li>
          <Link href='/contacts'>
          Contacts
          </Link>
        </li>

        <li>
          <Link href='/about'>
            About
          </Link>
        </li>

        <li>
          <Link href='/help'>
            Help
          </Link>
        </li>
        <li>
          <Link href='/developer'>
            Developer
          </Link>
        </li>

      </ul>
    </div>
  )
}
