import React, { createContext, useState } from 'react';


type EditorContextType = {
  editor: string;
  SetEditor: React.Dispatch<React.SetStateAction<string>>;
  readOnly: boolean;
  SetReadOnly: React.Dispatch<React.SetStateAction<boolean>>;
  inputValue: string;
  SetInputValue: React.Dispatch<React.SetStateAction<string>>;
  category: string;
  SetCategory: React.Dispatch<React.SetStateAction<string>>;
};

type EditorContextProviderProps = {
  children: React.ReactNode;
};

// eslint-disable-next-line prettier/prettier
export const EditorContext = createContext({} as EditorContextType);

export const EditorContextProvider = ({
  children,
}: EditorContextProviderProps) => {
  const [editor, SetEditor] = useState('');
  const [readOnly, SetReadOnly] = useState(false)
  const [inputValue, SetInputValue] = useState('');
  const [category, SetCategory] = useState('');
  return (
    <EditorContext.Provider value={{ editor, SetEditor, readOnly, SetReadOnly, inputValue, SetInputValue, category, SetCategory  }}>
      {children}
    </EditorContext.Provider>
  );
};
