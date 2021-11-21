import React, { createContext, useState } from 'react';
import { INote } from '../interfaces';

type promptStateType = {
  state: boolean;
  type: string;
}

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
  noteName: string;
  setNoteName: React.Dispatch<React.SetStateAction<string>>;
  updateMode: boolean;
  setUpdateMode: React.Dispatch<React.SetStateAction<boolean>>;
  promptState: promptStateType;
  setPromptState: React.Dispatch<React.SetStateAction<promptStateType>>;
  notes: INote[];
  setNotes: React.Dispatch<React.SetStateAction<INote[]>>;
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
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
  const [noteName, setNoteName] = useState<string>('');
  const [updateMode, setUpdateMode] = useState(false);
  const [promptState, setPromptState] = useState({state: false, type: 'NONE'});
  const [notes, setNotes] = useState<INote[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');


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
        noteName,
        setNoteName,
        updateMode,
        setUpdateMode,
        promptState,
        setPromptState,
        notes,
        setNotes,
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
