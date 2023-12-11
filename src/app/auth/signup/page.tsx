"use client";
import React, { useEffect, useRef, useState } from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import AuthButton from "@/components/AuthButton";
import KeyDown from "@/components/keyDown";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AlreadyHaveAnAccount from "@/components/AlreadyHaveAnAccount";
import {Form,Div,Input,Label,EyeIcon,InputWrapper,InputContainer} from '@/components/AuthStyles';



export default function SignupPage() {
    const router = useRouter();
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [phoneNumber,setPhoneNumber] = useState('');
    const [password,setPassword] = useState('');
    const [comfirmPassword,setComfirmPassword] = useState('');
    const [passwordVisible,setPasswordVisible] = useState(false);
    const [comfirmPasswordVisible,setComfirmPasswordVisible] = useState(false);
    const [loading, setLoading] = useState(false);

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


    const handleSubmit = async (event:any) => {
      event.preventDefault();
      try {
        setLoading(true);
        const response = await axios.post("/api/auth/signup", {
          username,
          email,
          phoneNumber,
          password,
          isAdmin:false
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
      usernameRef?.current?.focus()
      const togglePasswordVisibility = () => {
        setPasswordVisible((prev) =>  !prev);
      };

      const toggleComfirmPasswordVisibility = () => {
        setComfirmPasswordVisible((prev) =>  !prev);
      };

      passwordEyeWrapperRef?.current?.addEventListener("click", togglePasswordVisibility)
      comfirmPasswordEyeWrapperRef?.current?.addEventListener("click", toggleComfirmPasswordVisibility)

      return () => {
          passwordEyeWrapperRef?.current?.removeEventListener("click", togglePasswordVisibility);

          comfirmPasswordEyeWrapperRef?.current?.removeEventListener("click", toggleComfirmPasswordVisibility);
        }

    }, []);


    return (
    <Form method="POST" onSubmit={handleSubmit}>
      <InputContainer>

        <InputWrapper>
          <Label htmlFor="username">Username:</Label>
          <Input 
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            ref={usernameRef}
            onKeyDown={usernameKeyDown}
            required
          />
        </InputWrapper>

        <InputWrapper>
          <Label htmlFor="email">Email:</Label>
          <Input 
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            ref={emailRef}
            onKeyDown={emailKeyDown}
            required
          />
        </InputWrapper>

        <InputWrapper>
          <Label htmlFor="Phonenumber">Phone Number:</Label>
            <Input 
              id="phoneNumber"
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              ref={phoneNumberRef}
              onKeyDown={phoneNumberKeyDown}
              required
            />
        </InputWrapper>

        <InputWrapper>
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
              ref={passwordRef}
              onKeyDown={passwordKeyDown}
              required
            />
          </Div>
        </InputWrapper>

        <InputWrapper>
          <Label htmlFor="comfirmPassword">Comfirm Password:</Label>
          <Div>
            <EyeIcon ref={comfirmPasswordEyeWrapperRef} >
              <VisibilityOffIcon 
                id='comfirmPasswordEyeClose'
              />
              <VisibilityIcon 
                id='comfirmPasswordEyeOpen'
              />

            </EyeIcon>
            <Input 
              id="comfirmPassword"
              type={comfirmPasswordVisible ? 'text' : 'password'}
              value={comfirmPassword}
              onChange={(e) => setComfirmPassword(e.target.value)}
              ref={comfirmPasswordRef}
              onKeyDown={comfirmPasswordKeyDown}
              required
            />
          </Div>
        </InputWrapper>

        <AuthButton type='submit' ref={buttonRef}>
          Sign Up
        </AuthButton>

        <AlreadyHaveAnAccount />
      </InputContainer>
    </Form>
    )
};


