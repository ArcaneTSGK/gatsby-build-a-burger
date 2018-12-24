import * as React from 'react';
import StyledIngredient from './ingredient.css';

interface IBurgerIngredientProps {
  ingredient: string;
}

export default ({ ingredient }: IBurgerIngredientProps) => <StyledIngredient ingredient={ingredient} />;