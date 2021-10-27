import React, { useContext } from 'react';
import { ActiveContext } from '../context/ActiveContext';
import { MainButton } from './Button.styles';
import {
  CategoryHeading,
  Wrapper,
  NotesCount,
  Search,
  Container,
} from './NotesHeader.styles';

const NotesHeader = () => {
  const { activeCategory } = useContext(ActiveContext);
  return (
    <>
      <Container>
        <Wrapper>
          <CategoryHeading>{activeCategory}</CategoryHeading>
          <NotesCount>Notes</NotesCount>
          <Search placeholder={`Search in ${activeCategory}`} />
          <MainButton width={6}>Add Note</MainButton>
        </Wrapper>
      </Container>
    </>
  );
};

export default NotesHeader;
