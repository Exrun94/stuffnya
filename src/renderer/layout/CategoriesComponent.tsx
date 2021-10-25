import React from 'react';
import Categories from '../components/Categories';
import Tags from '../components/Tags';
import QuickLinks from '../components/QuickLinks';
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
