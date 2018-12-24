import * as React from 'react';
import StyledDiv from './backdrop.css';

interface IBackdropProps {
  show: boolean;
  clicked: React.MouseEvent<HTMLElement>;
}

export default ({ show, clicked }: IBackdropProps) => show ? <StyledDiv onClick={() => clicked}/> : null;