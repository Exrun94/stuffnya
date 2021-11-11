import { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { useFetchCategories } from './useFetchCategories';
import { addNotes, deleteNote, updateNote } from '../db/db';
import { INote } from '../interfaces';
import { v4 as uuidv4 } from 'uuid';

export function useEditor() {
  const { categories } = useFetchCategories();
  const {
    editor,
    setEditor,
    newNoteAddedTrigger,
    setNewNoteAddedTrigger,
    readOnly,
    setReadOnly,
    selectedNote,
    noteName,
    setNoteName,
    updateMode,
    setUpdateMode
  } = useContext(GlobalContext);

  const [category, setCategory] = useState('');
  const [color, setColor] = useState('');

  async function onSave() {
    const data: INote = {
      id: uuidv4(),
      category: category || categories[1].data.name, // ensures if no category is selected in the options, to use first one
      color: color || categories[1].data.color,
      title: noteName || 'No Title',
      note: editor,
      date: Date.now(),
      tags: [],
    };

    await addNotes(data);
    setReadOnly(false);
    setEditor('');
    setNoteName('');
    setNewNoteAddedTrigger(!newNoteAddedTrigger)
  }

  function onCancel() {
    setReadOnly(true);
  }
  async function onDelete() {
    await deleteNote(selectedNote)
    setNewNoteAddedTrigger(!newNoteAddedTrigger);
    setEditor('');
    setNoteName('');
    setReadOnly(false);
  }

  async function onUpdate() {
    const note: INote = {
        id: selectedNote.id,
        category: selectedNote.category,
        color: selectedNote.color,
        title: noteName || 'No Title',
        note: editor,
        date: selectedNote.date,
        tags: selectedNote.tags,
    }
    await updateNote(note);
    setNewNoteAddedTrigger(!newNoteAddedTrigger)
    setReadOnly(true);
  }

  function onEdit() {
    setReadOnly(false);
    setUpdateMode(true);
  }

  function getOption(e: React.ChangeEvent<HTMLSelectElement>) {
    const index = e.target.selectedIndex;
    const optionElement = e.target.children[index];
    const option = optionElement.getAttribute('data-color');
    setCategory(e.target.value);
    setColor(option || '#fff');
  }

  return {
    onSave,
    onCancel,
    onDelete,
    onUpdate,
    onEdit,
    getOption,
    setEditor,
    editor,
    updateMode,
    readOnly,
    selectedNote,
    categories,
    noteName,
    setNoteName,
  };
}
