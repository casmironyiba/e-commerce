
import React,{FC} from 'react'
import styles from '../styles/components/authButton.module.scss';

interface Prop {
    signup?:any;
    signin?:any;
    adminSignin?:any;
    adminSignup?:any;
  };

const AuthButton:FC<Prop>= (props:any) => {
  if (props.signup) {
      return (
      <div className={styles.authButtonContainer}>
        <button className={styles.authButton}> Sign up</button>
      </div>

    )
  };

  if (props.signin) {
      return (
      <div className={styles.authButtonContainer} >
        <button className={styles.authButton}> Sign In</button>
      </div>

    )
  };

  if (props.adminSignin) {
      return (
      <div className={styles.authButtonContainer} >
        <button className={styles.authButton}> Admin SignIn</button>
      </div>

    )
  };

  if (props.adminSignup) {
      return (
      <div className={styles.authButtonContainer} >
        <button className={styles.authButton}> Admin Sign up</button>
      </div>

    )
  } 
  else {
      return (
      <div className={styles.authButtonContainer} >
        <button className={styles.authButton}>Sign Up </button>
      </div>
      )
    }
};

export default AuthButton;
