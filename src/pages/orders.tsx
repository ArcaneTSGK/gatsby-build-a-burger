import * as React from 'react';
import Layout from '../components/layout/layout';

interface IOrderPageProps {
  location: any;
}

const OrdersPage = ({ location }: IOrderPageProps) => (
  <Layout location={location}>
  </Layout>
);

export default OrdersPage;