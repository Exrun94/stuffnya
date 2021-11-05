import React, { createContext, useState } from 'react';
import { INote } from '../interfaces';

/*
This context  provides the following state functionality
[note, setNote] => Shares the note data between components
[addNote, setAddNote] => Boolean state that will tell components when a new note is being created, based on which different components will be rendered or not
[noteDispatch, setNoteDispatch] => Boolean state will trigger rerender if new note is created
*/

type NoteContextType = {
  note: INote;
  SetNote: React.Dispatch<React.SetStateAction<INote>>;
  notes: INote[];
  setNotes: React.Dispatch<React.SetStateAction<INote[]>>;
  addNote: boolean;
  SetAddNote: React.Dispatch<React.SetStateAction<boolean>>;
  noteDispatch: boolean;
  SetNoteDispatch: React.Dispatch<React.SetStateAction<boolean>>;
  readOnly: boolean;
  SetReadOnly: React.Dispatch<React.SetStateAction<boolean>>
  notesLength: number;
  SetNotesLength: React.Dispatch<React.SetStateAction<number>>;
};

type NoteContextProviderProps = {
  children: React.ReactNode;
};

// eslint-disable-next-line prettier/prettier
export const NoteContext = createContext({} as NoteContextType);

export const NoteContextProvider = ({ children }: NoteContextProviderProps) => {
  const [notes, setNotes] = useState<INote[]>([] as INote[]);
  const [note, SetNote] = useState<INote>({} as INote);
  const [addNote, SetAddNote] = useState(true);
  const [noteDispatch, SetNoteDispatch] = useState(false);
  const [readOnly, SetReadOnly] = useState(false)
  const [notesLength, SetNotesLength] = useState(0);
  return (
    <NoteContext.Provider
      value={{
        note,
        SetNote,
        notes,
        setNotes,
        addNote,
        SetAddNote,
        noteDispatch,
        SetNoteDispatch,
        readOnly,
        SetReadOnly,
        notesLength,
        SetNotesLength
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};
