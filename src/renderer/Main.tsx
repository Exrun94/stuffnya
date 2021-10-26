import React from 'react';
import { withStore } from 'react-context-hook';
import { CategoriesContextProvider } from './context/CategoriesContext';
import GlobalStyle from './Global.styles';
import Layout from './layout/Layout';
import { EditorContextProvider } from './context/EditorContext';

const Main = () => {
  return (
    <>
      <GlobalStyle />
      <EditorContextProvider>
        <CategoriesContextProvider>
          <Layout />
        </CategoriesContextProvider>
      </EditorContextProvider>
    </>
  );
};

export default withStore(Main);
