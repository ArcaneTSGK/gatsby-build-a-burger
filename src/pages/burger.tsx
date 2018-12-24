import * as React from 'react';
import Layout from '../components/layout/layout';
import BurgerBuilder from '../containers/burgerBuilder/burgerBuilder';

const BurgerPage = () => (
  <Layout>
    <BurgerBuilder />
  </Layout>
);

export default BurgerPage;