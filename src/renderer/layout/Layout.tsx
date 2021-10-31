/* eslint-disable react/no-children-prop */
import React, { useContext } from 'react';
import { useStoreState } from 'react-context-hook';
import MotionFrameComponent from '../components/MotionFrameComponent';
import { Container } from './Layout.styles';
import HeaderComponent from './HeaderComponent';
import SideNavComponent from './SideNavComponent';
import CategoriesComponent from './CategoriesComponent';
import EditorComponent from './EditorComponent';
import NotesComponent from './NotesComponent';
import ClientComponent from './ClientComponent';
import { NoteContext } from '../context/NoteContext';
import RichText from '../components/RichText';

const Layout = () => {
  const store = useStoreState();
  const { addNote, note } = useContext(NoteContext);

  return (
    <>
      <Container>
        {store.state && <MotionFrameComponent />}
        <HeaderComponent />
        <SideNavComponent />
        <CategoriesComponent />
        <NotesComponent />
        {addNote && <EditorComponent />}
        {!addNote && <RichText note={note} />}
        <ClientComponent />
      </Container>
    </>
  );
};

export default Layout;
