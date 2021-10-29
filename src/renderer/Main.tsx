import React from 'react';
import { withStore } from 'react-context-hook';
import { CategoriesContextProvider } from './context/CategoriesContext';
import GlobalStyle from './Global.styles';
import Layout from './layout/Layout';
import { EditorContextProvider } from './context/EditorContext';
import { ActiveContextProvider } from './context/ActiveContext';
import { NoteContextProvider } from './context/NoteContext';

const Main = () => {
  return (
    <>
      <GlobalStyle />
      <ActiveContextProvider>
        <NoteContextProvider>
          <EditorContextProvider>
            <CategoriesContextProvider>
              <Layout />
            </CategoriesContextProvider>
          </EditorContextProvider>
        </NoteContextProvider>
      </ActiveContextProvider>
    </>
  );
};

export default withStore(Main);
