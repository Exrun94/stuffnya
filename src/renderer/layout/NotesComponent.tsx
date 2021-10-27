import React from 'react';
import NoteComponent from '../components/NoteComponent';
import NotesHeader from '../components/NotesHeader';
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
