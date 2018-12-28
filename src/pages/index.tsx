import * as React from 'react';
import Layout from "../components/layout/layout";

interface IIndexPageProps {
  location: any;
}

const IndexPage = ({ location }: IIndexPageProps) => {
  console.log('Hello');
  return(
    <Layout location={location}>
      <h1>Gatsby Build A Burger</h1>
      <p>Welcome to the gatsby build a burger project.</p>
    </Layout>
  );
};



export default IndexPage
