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
import { addNote } from '../db/Notes';

const EditorComponent = () => {
  const { categories } = useContext(CategoriesContext);
  const { editor } = useContext(EditorContext);
  const [inputValue, setInputValue] = useState<string | null>(null);
  const [category, setCategory] = useState('');

  const onSave = async () => {
    const data = {
      value: editor,
      date: Date.now(),
      tags: [],
      name: inputValue || 'No Title',
    };

    await addNote(data, category);
  };

  return (
    <>
      <EditorContainer>
        <EditorWrapper>
          <BtnWrapper>
            <MainButton width={6} onClick={onSave}>
              Save
            </MainButton>
          </BtnWrapper>
          <Title
            placeholder="Enter Title"
            onChange={(e) => setInputValue(e.target.value)}
          />
          <DivWrapper>
            <Select onChange={(e) => setCategory(e.target.value)}>
              {categories?.map((c) => {
                return (
                  <Option key={c.key} value={c.data.name}>
                    {c.data.name}
                  </Option>
                );
              })}
            </Select>
            <TagIcon src={tag} />
            add onclick, spawning input to add tags
          </DivWrapper>
          <RichTextEditor />
        </EditorWrapper>
      </EditorContainer>
    </>
  );
};

export default EditorComponent;
