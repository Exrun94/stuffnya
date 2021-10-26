import React from 'react';
import { withStore } from 'react-context-hook';
import { CategoriesContextProvider } from './context/CategoriesContext';
import GlobalStyle from './Global.styles';
import Layout from './layout/Layout';
import { EditorContextProvider } from './context/EditorContext';
import { ActiveContextProvider } from './context/ActiveContext';

const Main = () => {
  return (
    <>
      <GlobalStyle />
      <ActiveContextProvider>
        <EditorContextProvider>
          <CategoriesContextProvider>
            <Layout />
          </CategoriesContextProvider>
        </EditorContextProvider>
      </ActiveContextProvider>
    </>
  );
};

export default withStore(Main);
