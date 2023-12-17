"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import AuthButton from "@/components/AuthButton";
import KeyDown from "@/components/keyDown";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import styles from '@/styles/pages/auth/signup.module.scss';
import AdminAlreadyHaveAnAccount from "@/styles/components/AdminAlreadyHaveAnAccount";



export default function SignupPage() {
    const router = useRouter();
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [phoneNumber,setPhoneNumber] = useState('');
    const [password,setPassword] = useState('');
    const [comfirmPassword,setComfirmPassword] = useState('');
    const [passwordVisible,setPasswordVisible] = useState(false);
    const [comfirmPasswordVisible,setComfirmPasswordVisible] = useState(false);
    const [loading, setLoading] = React.useState(false);

    const usernameRef = useRef<any>(null);
    const emailRef = useRef<any>(null);
    const phoneNumberRef = useRef<any>(null);
    const passwordRef = useRef<any>(null);
    const comfirmPasswordRef = useRef<any>(null);
    const buttonRef = useRef<any>(null);
    const passwordEyeWrapperRef = useRef<any>(null);
    const comfirmPasswordEyeWrapperRef = useRef<any>(null);


    const usernameKeyDown = KeyDown(emailRef);
    const emailKeyDown = KeyDown(phoneNumberRef);
    const phoneNumberKeyDown = KeyDown(passwordRef);
    const passwordKeyDown = KeyDown(comfirmPasswordRef);
    const comfirmPasswordKeyDown = KeyDown(buttonRef);
    const buttonKeyDown = () => {
        console.log('Submitted')
      };

    const handleSubmit = async () => {
      try {
        setLoading(true);
        const response = await axios.post("/api/signup", {
          username,
          email,
          password
        });
        console.log("Signup success", response.data);
        router.push("/login");
          
      } catch (error:any) {
          console.log("Signup failed", error.message);
          
          toast.error(error.message);
      }finally {
          setLoading(false);
      }
    }

    useEffect(() => {
      usernameRef.current?.focus()
      const togglePasswordVisibility = () => {
        setPasswordVisible((prev) =>  !prev);
      };

      const toggleComfirmPasswordVisibility = () => {
        setComfirmPasswordVisible((prev) =>  !prev);
      };

      passwordEyeWrapperRef.current.addEventListener("click", togglePasswordVisibility)
      comfirmPasswordEyeWrapperRef.current.addEventListener("click", toggleComfirmPasswordVisibility)

      return () => {
          passwordEyeWrapperRef.current.removeEventListener("click", togglePasswordVisibility);

          comfirmPasswordEyeWrapperRef.current.removeEventListener("click", toggleComfirmPasswordVisibility);
        }

    }, []);


    return (
    <form className={styles.signupFormContainer} onSubmit={handleSubmit}> 
      <div className={styles.signupInputContainer}>

        <div className={styles.signupInputWrapper}>
          <label htmlFor="username" className={styles.signupLabel}>Username:</label>
          <input 
            id="username"
            className={styles.signupInput}
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            ref={usernameRef}
            onKeyDown={usernameKeyDown}
            required
          />
        </div>

        <div className={styles.signupInputWrapper}>
          <label htmlFor="email" className={styles.signupLabel}>Email:</label>
          <input 
            id="email"
            className={styles.signupInput}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            ref={emailRef}
            onKeyDown={emailKeyDown}
            required
          />
        </div>

        <div className={styles.signupInputWrapper}>
          <label htmlFor="Phonenumber" className={styles.signupLabel}>Phone Number:</label>
            <input 
              className={styles.signupInput}
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              ref={phoneNumberRef}
              onKeyDown={phoneNumberKeyDown}
              required
            />
        </div>

        <div className={styles.signupInputWrapper}>
          <label htmlFor="password" className={styles.signupLabel}>Password:</label>
          <div className={styles.signupEyeWrapper}>
            <div className={styles.signupPasswordEyeWrapper} ref={passwordEyeWrapperRef}>
              <VisibilityOffIcon 
                className={styles.passwordEyeClose}
              />
              <VisibilityIcon 
                className={styles.passwordEyeOpen}
              />

            </div>
            <input 
              id="password"
              className={styles.signupInput}
              type={passwordVisible ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              ref={passwordRef}
              onKeyDown={passwordKeyDown}
              required
            />
          </div>
        </div>

        <div className={styles.signupInputWrapper}>
          <label htmlFor="comfirmPassword" className={styles.signupLabel}>Comfirm Password:</label>
          <div className={styles.signupEyeWrapper}>
            <div className={styles.signupComfirmPasswordEyeWrapper} ref={comfirmPasswordEyeWrapperRef} >
              <VisibilityOffIcon 
                className={styles.comfirmPasswordEyeClose}
              />
              <VisibilityIcon 
                className={styles.comfirmPasswordEyeOpen}
              />

            </div>
            <input 
              id="comfirmPassword"
              className={styles.signupInput}
              type={comfirmPasswordVisible ? 'text' : 'password'}
              value={comfirmPassword}
              onChange={(e) => setComfirmPassword(e.target.value)}
              ref={comfirmPasswordRef}
              onKeyDown={comfirmPasswordKeyDown}
              required
            />
          </div>
        </div>
        <div className={styles.signupAuthButtonWrapper}>
          <AuthButton signup/>
        </div>

        <AdminAlreadyHaveAnAccount />
      </div>
    </form>
    )
};


