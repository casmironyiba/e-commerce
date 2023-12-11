"use client";
import React, { useEffect, useReducer, useRef, useState } from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import {Form,Div,Input,Label,EyeIcon,InputWrapper,InputContainer} from '@/components/AuthStyles';
import DontHaveAnAccount from "@/components/DontHaveAnAccount";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AuthButton from "@/components/AuthButton";
import styled from "styled-components";





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
          <SigninForm onSubmit={handleSubmit}>
            <SignuinInputContainer>
              <SigninInputWrapper>
                <Label htmlFor="email">Email:</Label>
                <Input 
                  ref={emailRef}
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  ref={passwordRef}
                  id="password"
                  type={passwordVisible ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Div>
            </SigninInputWrapper>
            
            <AuthButton ref={buttonRef}>
              Sign Up
            </AuthButton>
            <DontHaveAnAccount />
          </SignuinInputContainer>
        </SigninForm>
    )

};

const SigninForm = styled(Form)`
  height:60%;
`;

const SignuinInputContainer = styled(InputContainer)`
  gap:10px;

`;

const SigninInputWrapper = styled(InputWrapper)`
  height:70px;
`;
