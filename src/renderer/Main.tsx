import React from 'react';
import { withStore } from 'react-context-hook';
import { CategoriesContextProvider } from './context/CategoriesContext';
import GlobalStyle from './Global.styles';
import Layout from './layout/Layout';
import { ActiveContextProvider } from './context/ActiveContext';
import { NoteContextProvider } from './context/NoteContext';
import { GlobalContextProvider } from './context/GlobalContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/toast.global.css';
import DefaultCategories from './db/DefaultCategories';

const Main = () => {
  DefaultCategories();
  return (
    <>
      <GlobalStyle />
      <GlobalContextProvider>
        <ActiveContextProvider>
          <NoteContextProvider>
            <CategoriesContextProvider>
              <ToastContainer />
              <Layout />
            </CategoriesContextProvider>
          </NoteContextProvider>
        </ActiveContextProvider>
      </GlobalContextProvider>
    </>
  );
};

export default withStore(Main);
