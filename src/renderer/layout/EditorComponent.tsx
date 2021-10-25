import React, { useContext } from 'react';
import { CategoriesContext } from '../context/CategoriesContext';
import RichTextEditor from '../components/RichTextEditor';
import { Select, Title, Option, TagIcon, DivWrapper } from './Editor.styles';
import { EditorContainer, EditorWrapper } from './Layout.styles';
import tag from '../../../assets/icons/tag.svg';

const EditorComponent = () => {
  const categoriesContext = useContext(CategoriesContext);
  const { categories } = categoriesContext;
  return (
    <>
      <EditorContainer>
        <EditorWrapper>
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
