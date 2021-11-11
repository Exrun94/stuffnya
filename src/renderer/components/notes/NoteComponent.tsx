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
    setEditor(note.note);
    setReadOnly(true)
    setNoteName(note.title);
    console.log(note);

  };

  return (
    <>
      {notes.map((note) => {
        return (
          <ColorIndicator
            key={note.id}
            color={note.color}
            onClick={() => onClick(note)}
          >
            <Container className={note === selectedNote ? 'active' : ''}>
              <Wrapper>
                <Category>{note.category}</Category>
                <Date>{moment(note.date).format('DD/MM/YY HH:mm')}</Date>
              </Wrapper>
              <Name>{note.title}</Name>
              <Content>{striptags(note.note)}</Content>
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
