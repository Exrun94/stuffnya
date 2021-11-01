/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React, { useContext, useState } from 'react';
import { CategoriesContext } from '../../context/CategoriesContext';
import { EditorContext } from '../../context/EditorContext';
import { textFormats, modules } from './editor.config';
import tag from '../../../../assets/icons/tag.svg';
import { MainButton } from '../global/Button.styles';
import { addNotes } from '../../db/Notes';
import { NoteContext } from '../../context/NoteContext';
import { StyledReactQuill, Select, Title, Option, TagIcon,DivWrapper, BtnWrapper, } from './Editor.styles';

function RichTextEditor() {
  const { editor, setEditor } = useContext(EditorContext);
  const { categories } = useContext(CategoriesContext);
  const { noteDispatch, setNoteDispatch } = useContext(NoteContext);

  const [inputValue, setInputValue] = useState<string>('');
  const [category, setCategory] = useState('');
  const [color, setColor] = useState('');

  const onSave = async () => {
    const data = {
      value: editor,
      date: Date.now(),
      tags: [],
      name: inputValue || 'No Title',
      category: category || categories[1].data.name, // ensures if no category is selected in the options, to use first one
      color: color || categories[1].data.color,
    };

    await addNotes(data);
    setNoteDispatch(!noteDispatch);
    setEditor('');
    setInputValue('');
  };

  const getOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const index = e.target.selectedIndex;
    const optionElement = e.target.children[index];
    const option = optionElement.getAttribute('data-color');
    setCategory(e.target.value);
    setColor(option || '#fff');
  };

  return (
    <>
      <BtnWrapper>
        <MainButton width={6} onClick={onSave}>
          Save
        </MainButton>
      </BtnWrapper>
      <Title
        placeholder="Enter Title"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <DivWrapper>
        <Select onChange={(e) => getOption(e)}>
          {categories?.map((c) => {
            if (c.data.name !== 'ALL') {
              return (
                <Option
                  key={c.key}
                  value={c.data.name}
                  data-color={c.data.color}
                >
                  {c.data.name}
                </Option>
              );
            }
          })}
        </Select>
        <TagIcon src={tag} />
      </DivWrapper>
      <StyledReactQuill
        value={editor}
        onChange={setEditor}
        placeholder="Start a new Note"
        modules={modules}
        formats={textFormats}
      />
    </>
  );
}

export default RichTextEditor;
