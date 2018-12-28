import * as React from 'react';
import StyledDiv from './checkoutSummary.css';
import Burger from '../../burger/burger';
import StandardButton from '../../ui/buttons/standardButton/standardButton';

interface ICheckoutProps {
  ingredients: any;
  onCheckoutBack: any;
  onCheckoutContinued: any;
}

export default ({ingredients, onCheckoutBack, onCheckoutContinued}: ICheckoutProps) => {
  return(
    <StyledDiv>
      <h1>We hope it tastes amazing!</h1>
      <div className="summary">
        <Burger ingredients={ingredients}/>
      </div>
      <StandardButton classBtn="danger" clicked={onCheckoutBack}>Back</StandardButton>
      <StandardButton classBtn="success" clicked={onCheckoutContinued}>Purchase</StandardButton>
    </StyledDiv>
  );
}