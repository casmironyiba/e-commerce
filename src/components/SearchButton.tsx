import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import styles from '../styles/components/searchButton.module.scss'

export default function SearchButton() {
  return (
    <button
      className={styles.searchButton}
    >
      <SearchIcon
        className={styles.headerSearchIcon}
        sx={{
          fontSize:25,
          color:'white',
          background:'#333333'
          }}
      />
    </button>
  )
}
