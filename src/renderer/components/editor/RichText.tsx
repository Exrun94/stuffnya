import React, { useContext, useState, useRef } from 'react';
import { NoteContext } from '../../context/NoteContext';
import tag from '../../../../assets/icons/tag.svg';
import { MainButton } from '../global/Button.styles';
import { textFormats, modules, modulesReadOnly } from './editor.config';
import { BtnWrapper, StyledReactQuill, TagIcon, TitleBar, Separator , Title, Select, DivWrapper, Option} from './Editor.styles';
import { CategoriesContext } from '../../context/CategoriesContext';
import { INote } from '../../interfaces';
import { deleteNote, UpdateNote } from '../../db/Notes';

function RichText() {
  const { note, noteDispatch, SetNoteDispatch } = useContext(NoteContext);
  const { categories } = useContext(CategoriesContext);
  const [ editMode, setEditMode ] = useState(false);
  const [ module, setModule ] = useState<any>(modulesReadOnly)
  const [inputValue, setInputValue] = useState<string>('');
  const [category, setCategory] = useState('');
  const [color, setColor] = useState('');

  const editorRef = useRef<any>();

  const onEdit = () => {
    console.log('onEdit: ', note);
    setEditMode(true);
    setModule(modules)
    setInputValue(note.data?.name)
  }

  const onCancel = () => {
    setEditMode(false);
    setModule(modulesReadOnly)
  }

  const onSave = () => {

    const data: INote = {
      key: note.key,
      data: {
        category: category || note.data.category,
        date: note.data.date,
        name: inputValue,
        tags: [],
        color: color || note.data.color,
        value: editorRef.current.state.value
      }
    }

    console.log('NEW: ', data);
    console.log('OLD: ', note);

    UpdateNote(data);

    setEditMode(false);
    setModule(modulesReadOnly)
  }

  const onDelete = async() => {
    await deleteNote(note.data.category, note.key);
    SetNoteDispatch(!noteDispatch);
    setEditMode(true);
    setModule(modules)
    note.data.value = '';
    setInputValue('');
  }

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
        {!editMode && <MainButton width={6} onClick={onEdit}>
          Edit
        </MainButton>}
        {!editMode && <MainButton width={6} onClick={onDelete}>
          Delete
        </MainButton>}
        {editMode && <MainButton width={6} onClick={onCancel}>
          Cancel
        </MainButton>}
        {editMode && <MainButton width={6} onClick={onSave}>
          Save
        </MainButton>}
      </BtnWrapper>
      {!editMode && <TitleBar>{note.data?.name}</TitleBar>}
      {editMode && <Title
        placeholder="Enter Title"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />}
      <DivWrapper>
        {editMode && <Select onChange={(e) => getOption(e)}>
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
        </Select>}
        <TagIcon src={tag} />
      </DivWrapper>
      {!editMode && <Separator />}
      <StyledReactQuill
      value={note.data?.value}
      readOnly={!editMode}
      formats={textFormats}
      modules={module}
      ref={editorRef}
      />
    </>
  );
}

export default RichText;
