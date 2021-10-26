import React, { createContext, useState } from 'react';

type EditorContextType = {
  editor: string;
  setEditor: React.Dispatch<React.SetStateAction<string>>;
};

type EditorContextProviderProps = {
  children: React.ReactNode;
};

// eslint-disable-next-line prettier/prettier
export const EditorContext = createContext({} as EditorContextType);

export const EditorContextProvider = ({
  children,
}: EditorContextProviderProps) => {
  const [editor, setEditor] = useState<string>('');
  return (
    <EditorContext.Provider value={{ editor, setEditor }}>
      {children}
    </EditorContext.Provider>
  );
};
