import React, { useContext } from 'react';
import { EditorContext } from '../../context/EditorContext';
import { StyledReactQuill } from './RichTextEditor.styles';

const modules = {
  toolbar: [
    [
      'bold',
      'italic',
      'underline',
      'strike',
      { script: 'sub' },
      { script: 'super' },
    ],
    [{ header: 1 }, { header: 2 }],
    [
      { align: '' },
      { align: 'center' },
      { align: 'right' },
      { align: 'justify' },
    ],
    [
      { indent: '-1' },
      { indent: '+1' },
      { list: 'ordered' },
      { list: 'bullet' },
    ],
    [{ color: [] }, { background: [] }],
    ['link', 'image', 'video'],
    ['code-block', 'blockquote'],
    ['clean'],
  ],
  clipboard: {
    matchVisual: false,
  },
  syntax: true,
};

const textFormats = [
  'font',
  'header',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'background',
  'color',
  'script',
  'list',
  'bullet',
  'link',
  'image',
  'video',
  'clean',
  'code-block',
  'indent',
  'list',
  'align',
];

function RichTextEditor() {
  const { editor, setEditor } = useContext(EditorContext);

  return (
    <StyledReactQuill
      value={editor}
      onChange={setEditor}
      placeholder="Start a new Note"
      modules={modules}
      formats={textFormats}
    />
  );
}

export default RichTextEditor;
