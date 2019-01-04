import * as React from 'react';
import Layout from "../components/layout/layout";
import ContactData from '../containers/checkout/contactData/contactData';

interface IContactDataPageProps {
  location: any;
}

const ContactDataPage = ({ location }: IContactDataPageProps) => (
  <Layout location={location}>
    <ContactData location={location}/>
  </Layout>
);

export default ContactDataPage;