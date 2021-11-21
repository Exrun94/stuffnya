import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import { MainButton } from '../global/Button.styles';
import { CategoryHeading, Wrapper, NotesCount, Search, Container, } from './NotesHeader.styles';

const NotesHeader = () => {
  const { setReadOnly, setEditor, selectedCategory, setNoteName, setUpdateMode, setSearchTerm, notes } = useContext(GlobalContext);

  const onClick = () => {
    setReadOnly(false);
    setEditor('');
    setNoteName('');
    setUpdateMode(false);
  };

  return (
    <>
      <Container>
        <Wrapper>
          <CategoryHeading>{selectedCategory}</CategoryHeading>
          <NotesCount>Notes: {notes.length}</NotesCount>
          <Search placeholder={`Search in ${selectedCategory}`} onChange={(e) => { setSearchTerm(e.target.value) }} />
          <MainButton width={6} onClick={onClick}>
            Add Note
          </MainButton>
        </Wrapper>
      </Container>
    </>
  );
};

export default NotesHeader;
