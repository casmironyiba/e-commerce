"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import styled from 'styled-components'
import boxProperty from "@/fp/boxProperty";
import remsize from "@/fp/remsize";
import { colors } from "@/components/Themes";
import displayFlex from "@/fp/displayFlex";
import AuthButton from "@/components/AuthButton";
import KeyDown from "@/components/keyDown";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import {Form,Div,Input,Label,EyeIcon,InputWrapper,InputContainer} from '@/components/AuthStyles';
import DontHaveAnAccount from "@/components/DontHaveAnAccount";



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
      passwordEyeWrapperRef.current.addEventListener("click", togglePasswordVisibility)
      return () => {
          passwordEyeWrapperRef.current.removeEventListener("click", togglePasswordVisibility);
        }
      }, [passwordVisible]);

    return (
    <AdminSigninForm onSubmit={handleSubmit}>
      <SigninInputContainer>

        <SigninInputWrapper>
          <Label htmlFor="email">Email:</Label>
          <Input 
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
            ref={emailRef}
            onKeyDown={emailKeyDown}
            required
          />
        </SigninInputWrapper>

        <SigninInputWrapper>
          <Label htmlFor="password">Password:</Label>
          <Div>
            <EyeIcon ref={passwordEyeWrapperRef}>
              <VisibilityOffIcon 
                id='passwordEyeClose'
              />
              <VisibilityIcon 
                id='passwordEyeOpen'
              />

            </EyeIcon>
            <Input 
              id="password"
              type={passwordVisible ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
              ref={passwordRef}
              onKeyDown={passwordKeyDown}
              required
            />
          </Div>
        </SigninInputWrapper>

        <AuthButton
          ref={buttonRef}
        >
          Sign In
        </AuthButton>

        <DontHaveAnAccount />
      </SigninInputContainer>
    </AdminSigninForm>
    )
};

const AdminSigninForm = styled(Form)`
  height:60%;
`;

const SigninInputContainer = styled(InputContainer)`
  gap:10px;

`;

const SigninInputWrapper = styled(InputWrapper)`
  height:70px;
`;

