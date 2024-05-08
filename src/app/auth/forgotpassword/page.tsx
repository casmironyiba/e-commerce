"use client";
import React, { useRef, useState } from "react";
import {useRouter} from "next/navigation";
import { toast } from "react-hot-toast";
import AuthButton from "@/components/AuthButton";
import styles from "../../../styles/pages/auth/signin.module.scss";
// import AlreadyHaveAnAccount from "@/styles/components/AlreadyHaveAnAccount";



export default function SigninPage() {
    const [email,setEmail] = useState('');
    const router = useRouter();

    const emailRef = useRef<any>(null);
    const buttonRef = useRef<any>(null);
    const signinErrRef = useRef<any>(null);

   const handleForgotPassword = async (event:any) => {
     event.preventDefault();
      try {
        const response = await fetch('/api/auth/forgotpassword', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });

        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

      return (
          <form className={styles.signinFormContainer} onSubmit={handleForgotPassword}>
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

            <div className={styles.signinAuthButtonWrapper}>
              <AuthButton forgotPasswor  />
            </div>
          </div>
        </form>
    )

};
