/* eslint-disable react/no-children-prop */
import React from 'react';
import { useStoreState } from 'react-context-hook';
import MotionFrameComponent from '../components/MotionFrameComponent';
import { Container } from './Layout.styles';
import HeaderComponent from './HeaderComponent';
import SideNavComponent from './SideNavComponent';
import CategoriesComponent from './CategoriesComponent';
import NotesComponent from './EditorComponent';
import EditorComponent from './NotesComponent';
import ClientComponent from './ClientComponent';

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
