import React from 'react';
import NoteComponent from '../components/notes/NoteComponent';
import NotesHeader from '../components/notes/NotesHeader';
import { NotesContainer } from './Layout.styles';

const NotesComponent = () => {
  return (
    <>
      <NotesContainer>
        <NotesHeader />
        <NoteComponent />
      </NotesContainer>
    </>
  );
};

export default NotesComponent;
