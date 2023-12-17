"use client";
import React, { useEffect, useRef, useState } from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import AuthButton from "@/components/AuthButton";
import KeyDown from "@/components/keyDown";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DontHaveAnAccount from "@/components/DontHaveAnAccount";
import styles from "../../../styles/pages/auth/signin.module.scss";
import AdminDontHaveAnAccount from "@/styles/components/AdminDontHaveANAccount";



export default function SignupPage() {
    const router = useRouter();
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [comfirmPassword,setComfirmPassword] = useState('');
    const [passwordVisible,setPasswordVisible] = useState(false);

    const emailRef = useRef<any>(null);
    const passwordRef = useRef<any>(null);
    const buttonRef = useRef<any>(null);
    const passwordEyeWrapperRef = useRef<any>(null);
    const [loading, setLoading] = React.useState(false);

    const usernameKeyDown = KeyDown(emailRef);
    const emailKeyDown = KeyDown(passwordRef);
    const passwordKeyDown = KeyDown(passwordRef);
    const comfirmPasswordKeyDown = KeyDown(passwordRef);
    const buttonKeyDown = KeyDown(comfirmPassword);

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
      const togglePasswordVisibility = () => {
        setPasswordVisible((prev) =>  !prev);
      };
      passwordEyeWrapperRef?.current.addEventListener("click", togglePasswordVisibility)
      return () => {
          passwordEyeWrapperRef?.current.removeEventListener("click", togglePasswordVisibility);
        }
      }, [passwordVisible]);

    return (
    <form className={styles.signinFormContainer}  onSubmit={handleSubmit}>
      <div className={styles.signinInputContainer}>
        <div className={styles.signinInputWrapper}>
          <label htmlFor="email" className={styles.signinLabel}>Email:</label>
          <input 
            id="adminEmail"
            className={styles.signinInput}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
            ref={emailRef}
            onKeyDown={emailKeyDown}
            required
          />
        </div>

        <div className={styles.signinInputWrapper}>
          <label htmlFor="password" className={styles.signinLabel} >Password:</label>
          <div className={styles.signinEyeWrapper}>
            <div ref={passwordEyeWrapperRef} className={styles.signinPasswordEyeWrapper}>
              <VisibilityOffIcon 
                className={styles.passwordEyeClose}
              />
              <VisibilityIcon 
                className={styles.passwordEyeOpen}
              />

            </div>
            <input 
              id="adminPassword"
              className={styles.signinInput}
              type={passwordVisible ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
              ref={passwordRef}
              onKeyDown={passwordKeyDown}
              required
            />
          </div>
        </div>

        <div className={styles.signinAuthButtonWrapper}>
          <AuthButton adminSignin />
        </div>

        <AdminDontHaveAnAccount />
      </div>
    </form>
    )
};

