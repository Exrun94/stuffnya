import React from 'react';
import Categories from '../components/category/Categories';
import Tags from '../components/category/Tags';
import QuickLinks from '../components/category/QuickLinks';
import { CategoriesContainer } from './Layout.styles';

const CategoriesComponent = () => {
  return (
    <>
      <CategoriesContainer>
        <Categories />
        <Tags />
        <QuickLinks />
      </CategoriesContainer>
    </>
  );
};

export default CategoriesComponent;
