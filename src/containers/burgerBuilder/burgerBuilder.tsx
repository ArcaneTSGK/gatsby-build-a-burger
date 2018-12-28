import * as React from 'react';
import Burger from '../../components/burger/burger';
import Controls from '../../components/burger/controls/controls';
import Modal from '../../components/ui/modal/modal';
import OrderSummary from "../../components/burger/orderSummary/orderSummary";
import { navigate } from '@reach/router';

const INGREDIENT_PRICES = {
  sauce: 0.39,
  salad: 0.20,
  bacon: 0.76,
  cheese: 0.50,
  chicken: 1.34,
  beef: 2.32
};

interface Ingredients {
  sauce: number;
  salad: number;
  bacon: number;
  cheese: number;
  chicken: number;
  beef: number;
}

interface IBurgerBuilderState {
  ingredients: Ingredients;
  totalPrice: number;
  purchasable: boolean;
  purchasing: boolean;
}

interface IBurgerBuilderProps {
  location: any;
}

class BurgerBuilder extends React.Component<IBurgerBuilderProps, IBurgerBuilderState> {
  public state = {
    ingredients: {
      sauce: 0,
      salad: 0,
      bacon: 0,
      cheese: 0,
      chicken: 0,
      beef: 0
    },
    totalPrice: 0.00,
    purchasable: false,
    purchasing: false
  };

  componentDidMount(){
    console.log()
    if(this.props.location.state.ingredients != null){
      this.setState(
            {
        ingredients: this.props.location.state.ingredients,
        totalPrice: this.props.location.state.totalPrice,
        purchasable: this.props.location.state.purchasable
        }
      )
    }
  }

  updatePurchaseState (ingredients: Ingredients) {
    const sum = Object.keys(ingredients)
      .map(igKey => {
        // @ts-ignore
        return ingredients[igKey]
      }).reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({purchasable: sum > 0});
  }

  addIngredientHandler = (ingredient:any) => {
    const ingredientsArray:any = Object.assign([], this.state.ingredients);
    const oldCount = ingredientsArray[ingredient];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...ingredientsArray
    };
    updatedIngredients[ingredient] = updatedCount;
    const pricesArray:any = Object.assign([], INGREDIENT_PRICES);
    const priceAddition = pricesArray[ingredient];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    this.updatePurchaseState(updatedIngredients);
  };

  // @ts-ignore
  removeIngredientHandler = (ingredient) => {
    // @ts-ignore
    const oldCount = this.state.ingredients[ingredient];
    if(oldCount <= 0){
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    // @ts-ignore
    updatedIngredients[ingredient] = updatedCount;
    // @ts-ignore
    const priceDeduction = INGREDIENT_PRICES[ingredient];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    this.updatePurchaseState(updatedIngredients);
  };

  purchaseHandler = () => {
    this.setState({purchasing: true});
  }

  purchaseCancelHandler = () => {
    this.setState({purchasing: false});
  }

  purchaseContinueHandler = () => {
    navigate(`/checkout`, {state: {ingredients: this.state.ingredients, totalPrice: this.state.totalPrice}});
  }

  render() {
    return (
      <React.Fragment>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
          <OrderSummary ingredients={this.state.ingredients} purchaseContinued={this.purchaseContinueHandler} purchaseCanceled={this.purchaseCancelHandler} price={this.state.totalPrice}/>
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <Controls ingredientAdded={this.addIngredientHandler} ingredientRemoved={this.removeIngredientHandler} price={this.state.totalPrice} purchasable={this.state.purchasable} ordered={this.purchaseHandler} />
      </React.Fragment>
    );
  }
}

export default BurgerBuilder;