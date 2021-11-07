/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React from 'react';
import { textFormats, modules, modulesReadOnly } from './editor.config';
import tag from '../../../../assets/icons/tag.svg';
import { MainButton } from '../global/Button.styles';
import { StyledReactQuill, Select, Title, Option, TagIcon,DivWrapper, BtnWrapper, Separator } from './Editor.styles';
import { useEditor } from '../../hooks/useEditor';


function RichTextEditor() {
  const {
    onSave,
    onCancel,
    onDelete,
    onUpdate,
    onEdit,
    getOption,
    setEditor,
    setInputValue,
    editor,
    updateMode,
    readOnly,
    inputValue,
    selectedNote,
    categories,
  } = useEditor();


  return (
    <>
      <BtnWrapper>
        {!readOnly && !updateMode && <MainButton width={6} onClick={onSave}>
          Save
        </MainButton>}
        {readOnly && <MainButton width={6} onClick={onEdit}>
          Edit
        </MainButton>}
        {!readOnly && updateMode && <MainButton width={6} onClick={onUpdate}>
          Update
        </MainButton>}
        {!readOnly && <MainButton width={6} onClick={onCancel}>
          Cancel
        </MainButton>}
        {readOnly && <MainButton width={6} onClick={onDelete}>
          Delete
        </MainButton>}
      </BtnWrapper>
      <Title
        placeholder="Enter Title"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        disabled={readOnly}
      />
      <DivWrapper>
        {readOnly ? <Select disabled={readOnly} value={selectedNote.data?.category}>
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
        </Select> :
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
        }
        <TagIcon src={tag} />
      </DivWrapper>
      {readOnly && <Separator />}
      <StyledReactQuill
        value={editor}
        onChange={setEditor}
        placeholder="Start a new Note"
        modules={!readOnly ? modules : modulesReadOnly}
        formats={textFormats}
        readOnly={readOnly}
      />
    </>
  );
}

export default RichTextEditor;
