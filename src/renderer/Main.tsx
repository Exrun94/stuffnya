import React from 'react';
import Layout from './layout/Layout';
import DefaultCategories from './db/DefaultCategories';
import GlobalStyle from './Global.styles';

import { withStore } from 'react-context-hook';
import { GlobalContextProvider } from './context/GlobalContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/toast.global.css';

const Main = () => {
  DefaultCategories();
  return (
    <>
      <GlobalStyle />
      <GlobalContextProvider>
        <ToastContainer />
        <Layout />
      </GlobalContextProvider>
    </>
  );
};

export default withStore(Main);
