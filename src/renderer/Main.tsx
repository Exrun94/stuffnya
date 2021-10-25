import React from 'react';
import { withStore } from 'react-context-hook';
import { CategoriesContextProvider } from './context/CategoriesContext';
import GlobalStyle from './global.styles';
import Layout from './layout/Layout';

const Main = () => {
  return (
    <>
      <GlobalStyle />
      <CategoriesContextProvider>
        <Layout />
      </CategoriesContextProvider>
    </>
  );
};

export default withStore(Main);
