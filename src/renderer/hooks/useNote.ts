import React from 'react';
import { INote } from '../interfaces/note'


export function useNote() {
  const [selectedNote, SetSelectedNote] = React.useState<INote>({} as INote);

  const onSelected = (note: INote) => SetSelectedNote(note);

  return { onSelected, selectedNote }
}

