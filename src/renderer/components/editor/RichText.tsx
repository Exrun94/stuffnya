import React from 'react';
import { StyledReactQuill } from './RichTextEditor.styles';

type Props = {
  note: string;
};

const modules = {
  toolbar: false,
  syntax: true,
  clipboard: {
    matchVisual: false,
  },
};

function RichText({ note }: Props) {
  return <StyledReactQuill value={note} readOnly modules={modules} />;
}

export default RichText;
