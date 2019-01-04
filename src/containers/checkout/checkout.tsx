import * as React from 'react';
import CheckoutSummary from '../../components/order/checkoutSummary/checkoutSummary';
import { navigate } from '@reach/router';
import { Ingredients } from '../../types/ingredients';

interface ICheckoutState {
  ingredients: Ingredients;
  totalPrice: number;
}

interface ICheckoutProps {
  location: any;
}

class Checkout extends React.Component<ICheckoutProps, ICheckoutState> {
  constructor(props: ICheckoutProps){
    super(props);
    this.state = {
      ingredients: {
        sauce: 0,
        salad: 0,
        bacon: 0,
        cheese: 0,
        chicken: 0,
        beef: 0
      },
      totalPrice: 0.00
    };
  }

  componentDidMount() {
    this.setState({ingredients: this.props.location.state.ingredients, totalPrice: this.props.location.state.totalPrice})
  }

  checkoutCancelledHandler = () => {
    navigate(`/burger`, {state: {ingredients: this.state.ingredients, totalPrice: this.state.totalPrice, purchasing: false, purchasable: true}});
  };

  checkoutContinuedHandler = () => {
    navigate(`/contact-data`);
  };

  render() {

    if(this.state.totalPrice < 0.00) {
      navigate(`/`);
      return null;
    } else {
      return(
        <CheckoutSummary ingredients={this.state.ingredients} onCheckoutBack={this.checkoutCancelledHandler} onCheckoutContinued={this.checkoutContinuedHandler} />
      );
    }
  }
}

export default Checkout;