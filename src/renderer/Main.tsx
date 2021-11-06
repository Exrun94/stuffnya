import React from 'react';
import { withStore } from 'react-context-hook';
import { CategoriesContextProvider } from './context/CategoriesContext';
import GlobalStyle from './Global.styles';
import Layout from './layout/Layout';
import { EditorContextProvider } from './context/EditorContext';
import { ActiveContextProvider } from './context/ActiveContext';
import { NoteContextProvider } from './context/NoteContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/toast.global.css';
import { GlobalContextProvider } from './context/GlobalContext';
// import { destroyDB } from './db/db';

const Main = () => {
  // destroyDB();

  return (
    <>
      <GlobalStyle />
      <GlobalContextProvider>
        <ActiveContextProvider>
          <NoteContextProvider>
            <EditorContextProvider>
              <CategoriesContextProvider>
                <ToastContainer />
                <Layout />
              </CategoriesContextProvider>
            </EditorContextProvider>
          </NoteContextProvider>
        </ActiveContextProvider>
      </GlobalContextProvider>
    </>
  );
};

export default withStore(Main);
