import React, { useContext } from 'react';
import { NotesContainer } from './Layout.styles';
import { ActiveContext } from '../context/ActiveContext';

const NotesComponent = () => {
  const { activeCategory } = useContext(ActiveContext);

  console.log(activeCategory);

  return (
    <>
      <NotesContainer>
        <p>{activeCategory}</p>
      </NotesContainer>
    </>
  );
};

export default NotesComponent;
