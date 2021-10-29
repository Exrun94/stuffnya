import React, { createContext, useState } from 'react';

type CategoryProps = {
  data: {
    name: string;
    color: string;
  };
  key: string;
}[];

type CategoriesContextType = {
  categories: CategoryProps;
  setCategories: React.Dispatch<React.SetStateAction<CategoryProps>>;
};

type CategoriesContextProviderProps = {
  children: React.ReactNode;
};

// eslint-disable-next-line prettier/prettier
export const CategoriesContext = createContext({} as CategoriesContextType);

export const CategoriesContextProvider = ({
  children,
}: CategoriesContextProviderProps) => {
  const [categories, setCategories] = useState<CategoryProps>([]);
  return (
    <CategoriesContext.Provider value={{ categories, setCategories }}>
      {children}
    </CategoriesContext.Provider>
  );
};
