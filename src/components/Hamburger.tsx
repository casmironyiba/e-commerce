import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import React, { useEffect, useRef,FC } from 'react'
import styles from '../styles/components/hamburger.module.scss';

interface HamburgerProps {
  isNavBarOpen: boolean;
  setIsNavBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Hamburger:FC<HamburgerProps> = ({ isNavBarOpen, setIsNavBarOpen }) => {
  const menuRef = useRef<any>(null);


  useEffect(() => {
    const handleMenuClick = () => {
      setIsNavBarOpen((prev) => !prev);
console.log('isNavBarOpen after click:', isNavBarOpen);
    };

    menuRef.current?.addEventListener('click', handleMenuClick);

    return () => {
      menuRef.current?.removeEventListener('click', handleMenuClick);
    };

  }, [setIsNavBarOpen,isNavBarOpen]);


      // console.log('isNavBarOpen:', isNavBarOpen);

const containerClass = isNavBarOpen ? 'open' : '';

  return (
    <div 
      ref={menuRef}
      className={styles.hamburger}
    >
      <MenuIcon
        sx={{color:'white',fontSize:60}} 
        id='menuIcon'
        />
      <MenuOpenIcon
        sx={{color:'white',fontSize:60}}
        fontSize='large'
        id='menuOpenIcon'
        />
    </div>
  )
};

export default Hamburger;


