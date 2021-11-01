import React, { useContext } from 'react';
import { NoteContext } from '../context/NoteContext';
import RichTextEditor from '../components/editor/RichTextEditor';
import { EditorContainer, EditorWrapper } from './Layout.styles';
import RichText from '../components/editor/RichText';

const EditorComponent = () => {
  const { addNote } = useContext(NoteContext);
  return (
    <>
      <EditorContainer>
        <EditorWrapper>
          {addNote && <RichTextEditor />}
          {!addNote && <RichText />}
        </EditorWrapper>
      </EditorContainer>
    </>
  );
};

export default EditorComponent;
