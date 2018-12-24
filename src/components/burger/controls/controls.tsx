import * as React from 'react';
import StyledDiv from './controls.css';
import Control from './control/control';

interface IBuildControlProps {
  ingredientAdded: any;
  ingredientRemoved: any;
  price: number;
  purchasable: boolean;
  ordered: any;
}

const controls = [
  {label: 'Sauce', ingredient: 'sauce'},
  {label: 'Salad', ingredient: 'salad'},
  {label: 'Bacon', ingredient: 'bacon'},
  {label: 'Cheese', ingredient: 'cheese'},
  {label: 'Chicken', ingredient: 'chicken'},
  {label: 'Beef', ingredient: 'beef'}
];

const BuildControls = ({ ingredientAdded, ingredientRemoved, price, purchasable, ordered }: IBuildControlProps) => (
  <StyledDiv>
    <p>Current Price: <strong>£{price.toFixed(2)}</strong></p>
    {controls.map(ctrl => (
      <Control key={ctrl.label} label={ctrl.label} added={() => ingredientAdded(ctrl.ingredient)} removed={() => ingredientRemoved(ctrl.ingredient)} />
    ))}
    <button className="OrderButton" disabled={!purchasable} onClick={ordered}>Order now!</button>
  </StyledDiv>
);

export default BuildControls;