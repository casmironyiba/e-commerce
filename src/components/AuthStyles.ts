import styled from 'styled-components'
import boxProperty from "@/fp/boxProperty";
import remsize from "@/fp/remsize";
import { colors } from "@/components/Themes";
import displayFlex from "@/fp/displayFlex";


export const Form = styled.form`
  ${boxProperty(`100%`,`70%`,`auto`,remsize(5), colors.$light)};
`;

export const InputContainer = styled.div`
  ${boxProperty(`100%`,`100%`,``,remsize(5))};
  ${displayFlex(`space-around`,`flex-start`,`column nowrap`)};
  gap:5px;
`;

export const InputWrapper = styled.div`
  ${boxProperty(`100%`,remsize(60),``,remsize(0))};
  ${displayFlex(`space-around`,`flex-start`,`column nowrap`)};
`;

export const Input = styled.input`
  ${boxProperty(`100%`,remsize(40),``,remsize(5),colors.$white)};
  font-size:1rem;
  border:none;
  outline:none;
  border:1px solid palevioletred;
  border-radius:7px;
`;

export const Label = styled.label`
  // ${boxProperty(`100%`,remsize(20))};
  font-size:1.1rem;
`;

export const Div = styled.div`
  ${boxProperty(`100%`,remsize(40),``, remsize(0), colors.$white)};
  ${displayFlex('space-between','center',`row nowrap`)};
  border-radius:7px;
  border:1px solid palevioletred;
  ${Input} {
      width: 90%;
      border:none;
      height:90%;
    }
`;

export const EyeIcon = styled.div`
  cursor:pointer;
  ${displayFlex(`center`,'center')};
  #passwordEyeOpen, #comfirmPasswordEyeOpen {
      display:none;
    } 
    .open {
      #passwordEyeClose {
        display: none;
      };
    };
         
 `;
