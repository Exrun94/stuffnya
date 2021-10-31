import React, { createContext, useState } from 'react';

type ActiveContextType = {
  activeCategory: string;
  setActiveCategory: React.Dispatch<React.SetStateAction<string>>;
};

type ActiveContextProviderProps = {
  children: React.ReactNode;
};

// eslint-disable-next-line prettier/prettier
export const ActiveContext = createContext({} as ActiveContextType);

export const ActiveContextProvider = ({
  children,
}: ActiveContextProviderProps) => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  return (
    <ActiveContext.Provider value={{ activeCategory, setActiveCategory }}>
      {children}
    </ActiveContext.Provider>
  );
};
