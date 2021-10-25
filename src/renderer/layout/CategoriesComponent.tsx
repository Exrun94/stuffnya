import React from 'react';
import Categories from '../components/Categories';
import { CategoriesContainer } from './Layout.styles';

const CategoriesComponent = () => {
  return (
    <>
      <CategoriesContainer>
        <Categories />
      </CategoriesContainer>
    </>
  );
};

export default CategoriesComponent;
