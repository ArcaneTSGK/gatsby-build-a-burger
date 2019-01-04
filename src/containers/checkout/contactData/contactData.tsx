import * as React from 'react';
import StyledDiv from './contactData.css';
import { Address } from '../../../types/contact';
import StandardButton from '../../../components/ui/buttons/standardButton/standardButton';
import { Ingredients } from '../../../types/ingredients';
import axios from '../../../services/axios-orders';
import {navigate} from "@reach/router";
import { Status } from '../../../types/oderStatus';

interface IContactDataState {
  name: string;
  email: string;
  address: Address;
  ingredients: Ingredients;
  totalPrice: number;
  loading: boolean;
  status: Status;
}

interface IBurgerBuilderProps {
  location: any;
}

class ContactData extends React.Component<IBurgerBuilderProps, IContactDataState> {
  public state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    },
    ingredients: {
      sauce: 0,
      salad: 0,
      bacon: 0,
      cheese: 0,
      chicken: 0,
      beef: 0,
    },
    totalPrice: 0.00,
    loading: false,
    status: 0
  };

  componentWillMount(){
    this.setState({ingredients: this.props.location.state.ingredients, totalPrice: this.props.location.state.totalPrice})
  }

  orderHandler = (event: any) => {
    event.preventDefault();
    this.setState( {loading: true } );
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      status: this.state.status,
      customer: {
        name: 'Michael',
        address: {
          street: 'Test street',
          zipCode: 'M31',
          country: 'UK'
        },
        email: 'test@test.com'
      }
    };

    axios.post('/orders.json', order)
      .then( response => {
        this.setState( {loading: false} );
        navigate('/');
      })
      .catch(error => {
        this.setState( {loading: false} );
      });
  };

  render(){
    return(
      <StyledDiv>
        <h4>Enter your contact details!</h4>
        <form>
          <input type="text" name="name" placeholder="Your Name" />
          <input type="text" name="email" placeholder="Your Email" />
          <input type="text" name="street" placeholder="Your Street" />
          <input type="text" name="postal" placeholder="Your Postal Code" />
          <StandardButton classBtn="success" clicked={this.orderHandler}>ORDER</StandardButton>
        </form>
      </StyledDiv>
    );
  }
}

export default ContactData;