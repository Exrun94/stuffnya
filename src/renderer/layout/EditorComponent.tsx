import React, { useContext } from 'react';
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

const EditorComponent = () => {
  const { categories } = useContext(CategoriesContext);
  const { editor } = useContext(EditorContext);

  console.log(editor);

  return (
    <>
      <EditorContainer>
        <EditorWrapper>
          <BtnWrapper>
            <MainButton width={6}>Save</MainButton>
          </BtnWrapper>
          <Title>TEST</Title>
          <DivWrapper>
            <Select>
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
