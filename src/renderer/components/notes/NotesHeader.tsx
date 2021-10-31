import React, { useContext } from 'react';
import { NoteContext } from '../../context/NoteContext';
import { ActiveContext } from '../../context/ActiveContext';
import { MainButton } from '../global/Button.styles';
import {
  CategoryHeading,
  Wrapper,
  NotesCount,
  Search,
  Container,
} from './NotesHeader.styles';

const NotesHeader = () => {
  const { activeCategory } = useContext(ActiveContext);
  const { setAddNote } = useContext(NoteContext);

  const onClick = () => {
    setAddNote(true);
  };

  return (
    <>
      <Container>
        <Wrapper>
          <CategoryHeading>{activeCategory}</CategoryHeading>
          <NotesCount>Notes</NotesCount>
          <Search placeholder={`Search in ${activeCategory}`} />
          <MainButton width={6} onClick={onClick}>
            Add Note
          </MainButton>
        </Wrapper>
      </Container>
    </>
  );
};

export default NotesHeader;