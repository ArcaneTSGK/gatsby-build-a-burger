import * as React from 'react';
import StyledHeader from './header.css';
import { Link } from "gatsby";
import Logo from '../../ui/logo/logo';

export default () => (
  <StyledHeader>
    <section>
      <div className="logo">
        <Logo />
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/burger">Burger builder</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/checkout">Checkout</Link>
      </nav>
    </section>
  </StyledHeader>
);