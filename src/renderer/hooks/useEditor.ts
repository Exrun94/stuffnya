import { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { useFetchCategories } from './useFetchCategories';
import { addNotes, deleteNote } from '../db/db';

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
  } = useContext(GlobalContext);

  const [category, setCategory] = useState('');
  const [color, setColor] = useState('');
  const [updateMode, setUpdateMode] = useState(false);

  async function onSave() {
    const data = {
      value: editor,
      date: Date.now(),
      tags: [],
      name: noteName || 'No Title',
      category: category || categories[1].data.name, // ensures if no category is selected in the options, to use first one
      color: color || categories[1].data.color,
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
    await deleteNote(selectedNote.data.category, selectedNote.key)
    console.log(newNoteAddedTrigger);
    setNewNoteAddedTrigger(!newNoteAddedTrigger);
    console.log(newNoteAddedTrigger);
    setEditor('');
    setNoteName('');
    setReadOnly(false);
  }

  function onUpdate() {

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
