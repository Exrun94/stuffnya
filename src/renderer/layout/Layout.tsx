import React from 'react';
import MotionFrameComponent from '../components/category/MotionFrameComponent';
import HeaderComponent from './HeaderComponent';
import SideNavComponent from './SideNavComponent';
import CategoriesComponent from './CategoriesComponent';
import EditorComponent from './EditorComponent';
import NotesComponent from './NotesComponent';
import ClientComponent from './ClientComponent';

import { useStoreState } from 'react-context-hook';
import { Container } from './Layout.styles';

const Layout = () => {
  const store = useStoreState();

  return (
    <>
      <Container>
        {store.state && <MotionFrameComponent />}
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
