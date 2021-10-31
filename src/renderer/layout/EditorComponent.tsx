/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
import React from 'react';
import RichTextEditor from '../components/editor/RichTextEditor';
import { EditorContainer, EditorWrapper } from './Layout.styles';

const EditorComponent = () => {
  return (
    <>
      <EditorContainer>
        <EditorWrapper>
          <RichTextEditor />
        </EditorWrapper>
      </EditorContainer>
    </>
  );
};

export default EditorComponent;
