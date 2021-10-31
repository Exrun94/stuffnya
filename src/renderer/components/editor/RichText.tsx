import React, { useContext } from 'react';
import { NoteContext } from '../../context/NoteContext';
import { StyledReactQuill } from './Editor.styles';

const modules = {
  toolbar: false,
  syntax: true,
  clipboard: {
    matchVisual: false,
  },
};

function RichText() {
  const { note } = useContext(NoteContext);

  return (
    <StyledReactQuill value={note.data?.value} readOnly modules={modules} />
  );
}

export default RichText;
