import * as React from 'react';
import StyledDiv from './order.css';

interface IOrdersProps {

}

export default () => (
  <StyledDiv status="rejected">
    <h1>Your order:</h1>
    <ul>
      <li>Salad</li>
      <li>Cheese</li>
      <li>Beef</li>
      <li>Chicken</li>
    </ul>
    <p>Price: <strong>£3.15</strong></p>
  </StyledDiv>
);