/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
import React, { useContext, useState } from 'react';
import { CategoriesContext } from '../context/CategoriesContext';
import { EditorContext } from '../context/EditorContext';
import RichTextEditor from '../components/RichTextEditor';
import {
  Select,
  Title,
  Option,
  TagIcon,
  DivWrapper,
  BtnWrapper,
} from './Editor.styles';
import { EditorContainer, EditorWrapper } from './Layout.styles';
import tag from '../../../assets/icons/tag.svg';
import { MainButton } from '../components/Button.styles';
import { addNotes } from '../db/Notes';
import { NoteContext } from '../context/NoteContext';
import RichText from '../components/RichText';

const EditorComponent = () => {
  const { categories } = useContext(CategoriesContext);
  const { editor } = useContext(EditorContext);
  const [inputValue, setInputValue] = useState<string | null>(null);
  const [category, setCategory] = useState('');
  const [color, setColor] = useState('');
  // eslint-disable-next-line prettier/prettier
  const { note, addNote, noteDispatch, setNoteDispatch } = useContext(NoteContext);

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
      <EditorContainer>
        <EditorWrapper>
          <BtnWrapper>
            {addNote && (
              <MainButton width={6} onClick={onSave}>
                Save
              </MainButton>
            )}
          </BtnWrapper>
          <Title
            placeholder="Enter Title"
            onChange={(e) => setInputValue(e.target.value)}
          />
          <DivWrapper>
            {addNote && (
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
            )}
            <TagIcon src={tag} />
          </DivWrapper>
          {addNote && <RichTextEditor />}
          {!addNote && <RichText note={note} />}
        </EditorWrapper>
      </EditorContainer>
    </>
  );
};

export default EditorComponent;
