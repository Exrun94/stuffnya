/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React, { useContext, useState } from 'react';
import { CategoriesContext } from '../../context/CategoriesContext';
import { EditorContext } from '../../context/EditorContext';
import { textFormats, modules, modulesReadOnly } from './editor.config';
import tag from '../../../../assets/icons/tag.svg';
import { MainButton } from '../global/Button.styles';
import { addNotes, deleteNote } from '../../db/Notes';
import { NoteContext } from '../../context/NoteContext';
import { StyledReactQuill, Select, Title, Option, TagIcon,DivWrapper, BtnWrapper, Separator } from './Editor.styles';


function RichTextEditor() {
  const { editor, SetEditor, readOnly, SetReadOnly, inputValue, SetInputValue, category, SetCategory } = useContext(EditorContext);
  const { categories } = useContext(CategoriesContext);
  const { noteDispatch, SetNoteDispatch, note  } = useContext(NoteContext);
  const [color, setColor] = useState('');
  const [updateMode, setUpdateMode] = useState(false);

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
    SetReadOnly(false);
    SetEditor('');
    SetInputValue('');
    SetNoteDispatch(!noteDispatch);
  };

  const onEdit = () => {
    console.log('I am in Edit mode!');
    SetReadOnly(false);
    setUpdateMode(true);
  }

  const onUpdate = () => {
    console.log('Update mode');
  }

  const onCancel = () => {
    console.log('I am in Cancel mode');
  }

  const onDelete = async() => {
    await deleteNote(note.data.category, note.key);
    SetNoteDispatch(!noteDispatch);
    SetEditor('');
    SetInputValue('');
    SetReadOnly(false);

  }

  const getOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const index = e.target.selectedIndex;
    const optionElement = e.target.children[index];
    const option = optionElement.getAttribute('data-color');
    SetCategory(e.target.value);
    setColor(option || '#fff');
  };

  return (
    <>
      <BtnWrapper>
        {!readOnly && !updateMode && <MainButton width={6} onClick={onSave}>
          Save
        </MainButton>}
        {readOnly && <MainButton width={6} onClick={onEdit}>
          Edit
        </MainButton>}
        {!readOnly && <MainButton width={6} onClick={onUpdate}>
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
        onChange={(e) => SetInputValue(e.target.value)}
        disabled={readOnly}
      />
      <DivWrapper>
        {readOnly ? <Select disabled={readOnly} value={note.data?.category}>
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
        onChange={SetEditor}
        placeholder="Start a new Note"
        modules={!readOnly ? modules : modulesReadOnly}
        formats={textFormats}
        readOnly={readOnly}
      />
    </>
  );
}

export default RichTextEditor;
