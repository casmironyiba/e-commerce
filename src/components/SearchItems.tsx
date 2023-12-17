import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import styles from '../styles/components/searchItems.module.scss'


export default function SearchItems(){
  return (
    <div className={styles.searchItems}>

    <form className={styles.searchItems} id='searchItems'>
      <input type='text' placeholder='Search products of any brand' /> 
      <button>
      <SearchIcon
        sx={{fontSize:40}}
      />
      </button>
    </form>
    </div>
  )
};


