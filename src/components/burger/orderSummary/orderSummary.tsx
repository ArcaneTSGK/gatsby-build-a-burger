import * as React from 'react';
import StyledDiv from './orderSummary.css';

interface IOrderSummaryProps {
  ingredients: { [key: string] : number };
  purchaseContinued: any;
  purchaseCanceled: any;
  price: number;
}

const OrderSummary = ({ ingredients, purchaseCanceled, purchaseContinued, price }: IOrderSummaryProps) => {
  const ingredientSummary = Object.keys(ingredients)
    .map(igKey => {
      return <li key={igKey} style={{textTransform: 'capitalize'}}>{igKey}: {ingredients[igKey]}</li>
    });

  return(
    <StyledDiv>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p><strong>Total price: {price.toFixed(2)}</strong></p>
      <p>Continue to checkout?</p>
      <button onClick={purchaseCanceled}>Cancel</button>
      <button onClick={purchaseContinued}>Continue</button>
    </StyledDiv>
  );
};

export default OrderSummary;