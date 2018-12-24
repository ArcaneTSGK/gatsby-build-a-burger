import styled from '@emotion/styled';

interface IngredientStyles {
  ingredient: string;
}

const switchIngredient = (props:IngredientStyles): string => {
  switch(props.ingredient) {
    case('bread-bottom'):
      return `
        height: 13%;
        width: 80%;
        background: linear-gradient(#F08E4A, #e27b36);
        border-radius: 0 0 30px 30px;
        box-shadow: inset -15px 0 #c15711;
      `;
    case('bread-top'):
      return `
        height: 20%;
        width: 80%;
        background: linear-gradient(#bc581e, #e27b36);
        border-radius: 50% 50% 0 0;
        box-shadow: inset -15px 0 #c15711;
        position: relative;
      `;
    case('sauce'):
      return `
        width: 80%;
        height: 3%;
        background: linear-gradient(#e79d71, #e6ab70);
        margin: 2% auto;
      `;
    case('salad'):
      return `
        width: 85%;
        height: 7%;
        background: linear-gradient(#228c1d, #91ce50);
        border-radius: 20px;
      `;
    case('bacon'):
      return `
        width: 80%;
        height: 3%;
        background: linear-gradient(#bf3813, #c45e38);
        margin: 2% auto;
      `;
    case('cheese'):
      return `
        width: 90%;
        height: 4.5%;
        background: linear-gradient(#f4d004, #d6bb22);
        border-radius: 20px;
      `;
    case('chicken'):
      return `
        width: 80%;
        height: 8%;
        background: linear-gradient(#bf3a06, #b75009);
        border-radius: 15px;
      `;
    case('beef'):
      return `
        width: 80%;
        height: 8%;
        background: linear-gradient(#7f3608, #702e05);
        border-radius: 15px;
      `;
    default:
      return ``
  }
};

export default styled.div`
  ${(props:IngredientStyles)=>switchIngredient(props)}
  margin: 5px auto;
  border: solid 8px #701e13;
`;

