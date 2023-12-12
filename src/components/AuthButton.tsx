import styled from 'styled-components'
import boxProperty from '@/fp/boxProperty'
import remsize from '@/fp/remsize'
import {colors} from '@/components/Themes'

const AuthButton = styled.button`
  ${boxProperty('100%', remsize(40),`auto`, remsize(5), colors.$blue)}
  color: ${colors.$white};
  border-radius: 5px;
  font-size:1rem;
  cursor:pointer;
`;

export default AuthButton;
