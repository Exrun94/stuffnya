import React, { useContext } from 'react';
import tag from '../../../../assets/icons/tag.svg';

import { MainButton } from '../global/Button.styles';
import { useEditor } from '../../hooks/useEditor';
import { GlobalContext } from '../../context/GlobalContext';
import { textFormats, modules, modulesReadOnly } from './editor.config';
import { StyledReactQuill, Select, Title, Option, TagIcon,DivWrapper, BtnWrapper, Separator, TagWrapper, } from './Editor.styles';


function RichTextEditor() {
  const { setPromptState } = useContext(GlobalContext);
  const {
    onSave,
    onUpdate,
    onEdit,
    getOption,
    setEditor,
    setNoteName,
    editor,
    updateMode,
    readOnly,
    selectedNote,
    categories,
    noteName,
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
        {!readOnly && <MainButton width={6} onClick={() => setPromptState({state: true, type: 'CANCEL_NOTE_EDIT'})}>
          Cancel
        </MainButton>}
        {readOnly && <MainButton width={6} onClick={() => setPromptState({state: true, type: 'DELETE_NOTE'})}>
          Delete
        </MainButton>}
      </BtnWrapper>
      <Title
        placeholder="Enter Title"
        value={noteName}
        onChange={(e) => setNoteName(e.target.value)}
        disabled={readOnly}
      />
      <DivWrapper>
        {readOnly ? <Select disabled={readOnly} value={selectedNote?.category}>
          {categories?.map((c) => {
              return (
                <Option
                  key={c.key}
                  value={c.data.name}
                  data-color={c.data.color}
                >
                  {c.data.name}
                </Option>
              );
          })}
        </Select> :
        <Select onChange={(e) => getOption(e)}>
          {categories?.map((c) => {
              return (
                <Option
                  key={c.key}
                  value={c.data.name}
                  data-color={c.data.color}
                >
                  {c.data.name}
                </Option>
              );
          })}
        </Select>
        }
        <TagWrapper>
          <TagIcon src={tag} />
        </TagWrapper>
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
