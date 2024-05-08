import React, { FC, useEffect, useRef } from 'react'
import styles from '../styles/components/searchItems.module.scss'
import SearchButton from './SearchButton';

interface SearchProps {
  isSearchIconOpen:boolean;
  setIsSearchIconOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SearchItems:FC<SearchProps> = ({isSearchIconOpen, setIsSearchIconOpen}) => {
  const searchRef = useRef<any>(null);
  useEffect(() => {
    const handleSearchClick = () => {
        setIsSearchIconOpen((prev) => !prev);
        console.log(`header search icon is clicked ${isSearchIconOpen}`);
        
      };

    searchRef.current?.addEventListener('click',handleSearchClick);

    return () => {
      searchRef.current?.removeEventListener('click',handleSearchClick)
    };
      
    },[setIsSearchIconOpen,isSearchIconOpen]);


  return (
    <div className={styles.searchItems}>
      <div className={styles.headerSearchIconWrapper}>
        <SearchButton />
      </div>

    <form className={styles.searchItemsForm} id='searchItemsForm'>
      <input type='text' placeholder='Search products of any brand' /> 
    </form>
    </div>
  )
};

export default SearchItems
