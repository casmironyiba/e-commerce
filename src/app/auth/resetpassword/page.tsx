"use client";
import React, { useEffect,useRef, useState } from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import DontHaveAnAccount from "@/components/DontHaveAnAccount";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AuthButton from "@/components/AuthButton";
import styles from "../../../styles/pages/auth/signin.module.scss";



export default function SigninPage() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [passwordVisible,setPasswordVisible] = useState(false);
    const router = useRouter();
    const [loading, setLoading] = React.useState(false);

    const emailRef = useRef<any>(null);
    const passwordRef = useRef<any>(null);
    const passwordEyeWrapperRef = useRef<any>(null);
    const buttonRef = useRef<any>(null);
    const signinErrRef = useRef<any>(null);

    const handleSubmit = async () => {
      try {
        setLoading(true);
        const response = await axios.post("/api/signup", {
          email,
          password
        });
        console.log("Signup success", response.data);
        toast.success("Login success");
        router.push("/login");
          
      } catch (error:any) {
          console.log("Signup failed", error.message);
          toast.error(error.message);
          
          toast.error(error.message);
      }finally {
          setLoading(false);
      }
    };


    useEffect(() => {
      const togglePasswordVisibility = () => {
        setPasswordVisible((prev) =>  !prev);
      };
      passwordEyeWrapperRef?.current?.addEventListener("click", togglePasswordVisibility)
      return () => {
        passwordEyeWrapperRef?.current?.removeEventListener("click", togglePasswordVisibility);
        }
      }, [passwordVisible]);

      return (
          <form className={styles.signinFormContainer} onSubmit={handleSubmit}>
      <div className={styles.signinFormError} ref={signinErrRef}>No Err</div>
            <div className={styles.signinInputContainer}>
              <div className={styles.signinInputWrapper}>
                <label htmlFor="email" className={styles.signinLabel}>Email:</label>
                <input 
                  className={styles.signinInput}
                  ref={emailRef}
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
              />
            </div>

            <div className={styles.signinInputWrapper}>
              <label htmlFor="password" className={styles.signinLabel}>Password:</label>
              <div className={styles.signinEyeWrapper}>
                <div
                  ref={passwordEyeWrapperRef} className={styles.signinPasswordEyeWrapper}>
                  <VisibilityOffIcon 
                    className={styles.passwordEyeClose}
                  />
                  <VisibilityIcon 
                    className={styles.passwordEyeOpen}
                  />
                </div>

                <input 
                  className={styles.signinInput}
                  ref={passwordRef}
                  id="password"
                  type={passwordVisible ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className={styles.signinAuthButtonWrapper}>
              <AuthButton adminSignin  />
            </div>
            <DontHaveAnAccount />
          </div>
        </form>
    )

};
