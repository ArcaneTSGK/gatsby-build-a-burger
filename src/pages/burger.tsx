import * as React from 'react';
import Layout from '../components/layout/layout';
import BurgerBuilder from '../containers/burgerBuilder/burgerBuilder';

interface IBurgerPageProps {
  location: any;
}

const BurgerPage = ({ location }: IBurgerPageProps) => (
  <Layout location={location}>
    <BurgerBuilder location={location} />
  </Layout>
);

export default BurgerPage;