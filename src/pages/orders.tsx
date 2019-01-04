import * as React from 'react';
import Layout from '../components/layout/layout';
import Orders from '../containers/orders/orders';

interface IOrderPageProps {
  location: any;
}

const OrdersPage = ({ location }: IOrderPageProps) => (
  <Layout location={location}>
    <Orders />
  </Layout>
);

export default OrdersPage;