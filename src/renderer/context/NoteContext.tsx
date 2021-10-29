import React, { createContext, useState } from 'react';

type NoteContextType = {
  note: string;
  setNote: React.Dispatch<React.SetStateAction<string>>;
  addNote: boolean;
  setAddNote: React.Dispatch<React.SetStateAction<boolean>>;
};

type NoteContextProviderProps = {
  children: React.ReactNode;
};

// eslint-disable-next-line prettier/prettier
export const NoteContext = createContext({} as NoteContextType);

export const NoteContextProvider = ({ children }: NoteContextProviderProps) => {
  const [note, setNote] = useState<string>('');
  const [addNote, setAddNote] = useState(false);
  return (
    <NoteContext.Provider value={{ note, setNote, addNote, setAddNote }}>
      {children}
    </NoteContext.Provider>
  );
};
