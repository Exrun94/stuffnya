import React, { createContext, useState } from 'react';

/*
This context  provides the following state functionality
[note, setNote] => Shares the note data between components
[addNote, setAddNote] => Boolean state that will tell components when a new note is being created, based on which different components will be rendered or not
[noteDispatch, setNoteDispatch] => Boolean state will trigger rerender if new note is created
*/

type NoteContextType = {
  note: string;
  setNote: React.Dispatch<React.SetStateAction<string>>;
  addNote: boolean;
  setAddNote: React.Dispatch<React.SetStateAction<boolean>>;
  noteDispatch: boolean;
  setNoteDispatch: React.Dispatch<React.SetStateAction<boolean>>;
};

type NoteContextProviderProps = {
  children: React.ReactNode;
};

// eslint-disable-next-line prettier/prettier
export const NoteContext = createContext({} as NoteContextType);

export const NoteContextProvider = ({ children }: NoteContextProviderProps) => {
  const [note, setNote] = useState<string>('');
  const [addNote, setAddNote] = useState(false);
  const [noteDispatch, setNoteDispatch] = useState(false);
  return (
    <NoteContext.Provider
      value={{
        note,
        setNote,
        addNote,
        setAddNote,
        noteDispatch,
        setNoteDispatch,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};
