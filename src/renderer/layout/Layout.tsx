import React, { useContext } from 'react';
import MotionFrameComponent from '../components/category/MotionFrameComponent';
import HeaderComponent from './HeaderComponent';
import SideNavComponent from './SideNavComponent';
import CategoriesComponent from './CategoriesComponent';
import EditorComponent from './EditorComponent';
import NotesComponent from './NotesComponent';
import ClientComponent from './ClientComponent';
import Prompt from '../components/global/Prompt';

import { useStoreState } from 'react-context-hook';
import { Container } from './Layout.styles';
import { GlobalContext } from '../context/GlobalContext';

const Layout = () => {
  const store = useStoreState();
  const { promptState } = useContext(GlobalContext)

  return (
    <>
      <Container>
        {store.state && <MotionFrameComponent />}
        { promptState.state && <Prompt />}
        <HeaderComponent />
        <SideNavComponent />
        <CategoriesComponent />
        <NotesComponent />
        <EditorComponent />
        <ClientComponent />
      </Container>
    </>
  );
};

export default Layout;
