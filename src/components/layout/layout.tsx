import * as React from 'react';
import { Global } from '@emotion/core';
import GlobalStyles, { WrapperStyles as StyledDiv } from './layout.css';
import Header from './header/header';

interface ILayoutProps {
    children: any;
}

const Layout = ({ children }: ILayoutProps) => (
  <StyledDiv>
      <Header />
      <Global styles={GlobalStyles} />
      <main>
          {children}
      </main>
  </StyledDiv>
);

export default Layout;