import React, { useContext } from 'react';
import moment from 'moment';
import striptags from 'striptags';

import { INote } from '../../interfaces';
import { useFetchNotes } from '../../hooks/useFetchNotes';
import { GlobalContext } from '../../context/GlobalContext';
import { Container, Category, Date, Wrapper, Name, Content, ColorIndicator, Tags, TagsWrapper } from './NoteComponent.styles';

const NoteComponent = () => {
  const { setReadOnly, selectedNote, setSelectedNote, setEditor, setNoteName } = useContext(GlobalContext);
  const {notes} = useFetchNotes();

  const onClick = (note: INote) => {
    setSelectedNote(note)
    setEditor(note.data.value);
    setReadOnly(true)
    setNoteName(note.data.name);

  };

  return (
    <>
      {notes.map((note) => {
        return (
          <ColorIndicator
            key={note.data.date}
            color={note.data.color}
            onClick={() => onClick(note)}
          >
            <Container className={note === selectedNote ? 'active' : ''}>
              <Wrapper>
                <Category>{note.data.category}</Category>
                <Date>{moment(note.data.date).format('DD/MM/YY HH:mm')}</Date>
              </Wrapper>
              <Name>{note.data.name}</Name>
              <Content>{striptags(note.data.value)}</Content>
              <TagsWrapper>
                <Tags>htaccess</Tags>
                <Tags>Wordpress</Tags>
              </TagsWrapper>
            </Container>
          </ColorIndicator>
        );
      })}
    </>
  );
};

export default NoteComponent;
