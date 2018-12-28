import * as React from 'react';
import Layout from "../components/layout/layout";
import Checkout from "../containers/checkout/checkout";

interface ICheckoutPageProps {
  location: any;
}

const CheckoutPage = ({ location }: ICheckoutPageProps) => (
  <Layout location={location}>
    <Checkout location={location}/>
  </Layout>
);

export default CheckoutPage;