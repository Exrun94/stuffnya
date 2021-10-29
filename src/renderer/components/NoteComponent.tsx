import React, { useEffect, useState, useContext } from 'react';
import moment from 'moment';
import striptags from 'striptags';
// import parse from 'html-react-parser';
import { getNotes } from '../db/Notes';
import { ActiveContext } from '../context/ActiveContext';
import { NoteContext } from '../context/NoteContext';
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

interface NoteData {
  key: string;
  data: {
    value: string;
    date: number;
    tags: string[];
    name: string;
    color: string;
    category: string;
  };
}

const NoteComponent = () => {
  const [notes, setNotes] = useState<NoteData[]>([] as NoteData[]);
  const [active, setActive] = useState({} as NoteData);
  const { activeCategory } = useContext(ActiveContext);
  const { setNote, setAddNote } = useContext(NoteContext);

  useEffect(() => {
    async function fetchData() {
      const result = await getNotes(activeCategory || 'ALL');
      setNotes(result);
    }
    fetchData();
  }, [activeCategory]);

  const onClick = (note: NoteData) => {
    setActive(note);
    setAddNote(false);
    // const parsed = parse(note.data.value);
    setNote(note.data.value);
    console.log(note.data.value);
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
