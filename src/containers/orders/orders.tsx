import * as React from 'react';
import Order from '../../components/order/order/order';

class Orders extends React.Component {
  render() {
    return(
      <React.Fragment>
        <Order />
        <Order />
      </React.Fragment>
    );
  }
}

export default Orders;