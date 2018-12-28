import * as React from 'react';
import StyledButton from './standardButton.css';

interface IButtonProps {
  children: any;
  clicked: any;
  classBtn: string;
}

export default ({ children, clicked, classBtn }: IButtonProps) => (
  <StyledButton className={classBtn} onClick={clicked}>{children}</StyledButton>
);