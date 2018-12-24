import * as React from 'react';
import StyledDiv from './burger.css';
import Ingredient from './ingredient/ingredient';

interface IBurgerProps {
  ingredients: { [key: string] : number };
}

export default ({ ingredients }: IBurgerProps) => {

  const ingredientMap = () => {
    const items: string[] = Object.keys( ingredients );
    let parsedIngredients: Array<string> = [];

    items.forEach(item => {
      const amount: number = ingredients[item];
      for(let i = 0; i < amount; i++){
        parsedIngredients.push(item);
      }
    });

    return parsedIngredients;
  };

  let transformedIngredients = ingredientMap()
    .map((ig, key) => {
      return <Ingredient key={key} ingredient={ig}/>
    }).reduce((arr, el) => {
      return arr.concat(el)
    }, []);

  if (transformedIngredients.length === 0){
    // @ts-ignore
    transformedIngredients = <p>please start adding ingredients</p>
  }

  return (
    <StyledDiv>
      <Ingredient ingredient="bread-top" />
      {transformedIngredients}
      <Ingredient ingredient="bread-bottom" />
    </StyledDiv>
  );
}