import React, { useEffect, useState, useContext } from 'react';
import moment from 'moment';
import striptags from 'striptags';
import { getNotes } from '../../db/Notes';
import { ActiveContext } from '../../context/ActiveContext';
import { NoteContext } from '../../context/NoteContext';
import { INote } from '../../interfaces';
import {
  Container,
  Category,
  Date,
  Wrapper,
  Name,
  Content,
  ColorIndicator,
  Tags,
  TagsWrapper,
} from './NoteComponent.styles';

const NoteComponent = () => {
  const [notes, setNotes] = useState<INote[]>([] as INote[]);
  const [active, setActive] = useState({} as INote);
  const { activeCategory } = useContext(ActiveContext);
  const { setNote, setAddNote, noteDispatch } = useContext(NoteContext);

  useEffect(() => {
    async function fetchData() {
      const result = await getNotes(activeCategory || 'ALL');
      setNotes(result);
    }
    fetchData();
  }, [activeCategory, noteDispatch]);

  const onClick = (note: INote) => {
    setActive(note);
    setAddNote(false);
    setNote(note);
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
            <Container className={note === active ? 'active' : ''}>
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
