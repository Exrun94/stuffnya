import React, { createContext, useState } from 'react';

type GlobalContextType = {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
};

type GlobalContextProviderProps = {
  children: React.ReactNode;
};


export const GlobalContext = createContext({} as GlobalContextType);

export const GlobalContextProvider = ({ children }: GlobalContextProviderProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  return (
    <GlobalContext.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
