import React, { createContext, useState } from 'react';
import { INote } from '../interfaces';

type GlobalContextType = {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  newCategoryAddedTrigger: boolean;
  setNewCategoryAddedTrigger: React.Dispatch<React.SetStateAction<boolean>>;
  editor: string;
  setEditor: React.Dispatch<React.SetStateAction<string>>;
  newNoteAddedTrigger: boolean;
  setNewNoteAddedTrigger: React.Dispatch<React.SetStateAction<boolean>>;
  readOnly: boolean;
  setReadOnly: React.Dispatch<React.SetStateAction<boolean>>;
  selectedNote: INote;
  setSelectedNote: React.Dispatch<React.SetStateAction<INote>>;
};

type GlobalContextProviderProps = {
  children: React.ReactNode;
};


export const GlobalContext = createContext({} as GlobalContextType);

export const GlobalContextProvider = ({ children }: GlobalContextProviderProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [newCategoryAddedTrigger, setNewCategoryAddedTrigger] = useState<boolean>(false);
  const [newNoteAddedTrigger, setNewNoteAddedTrigger] = useState<boolean>(false);
  const [readOnly, setReadOnly] = useState<boolean>(false);
  const [editor, setEditor] = useState<string>('');
  const [selectedNote, setSelectedNote] = useState<INote>({} as INote);

  return (
    <GlobalContext.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
        newCategoryAddedTrigger,
        setNewCategoryAddedTrigger,
        newNoteAddedTrigger,
        setNewNoteAddedTrigger,
        editor,
        setEditor,
        readOnly,
        setReadOnly,
        selectedNote,
        setSelectedNote,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
