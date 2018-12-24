import * as React from 'react';
import StyledDiv from './modal.css';
import Backdrop from '../backdrop/backdrop';

interface IModalProps {
  children: any;
  show: boolean;
  modalClosed: any;
}

export default ({ children, show, modalClosed}: IModalProps) => (
  <React.Fragment>
    <Backdrop show={show} clicked={modalClosed} />
    <StyledDiv style={{
      transform: show ? 'translateY(0)' : 'translateY(-100vh)',
      opacity: show? 1 : 0
    }}>
      {children}
    </StyledDiv>
  </React.Fragment>
);