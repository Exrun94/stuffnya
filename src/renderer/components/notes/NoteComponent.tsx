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
// Testing custom hooks
import { useNote } from '../../hooks/useNote';
import { EditorContext } from '../../context/EditorContext';

const NoteComponent = () => {
  const [notes, setNotes] = useState<INote[]>([] as INote[]);
  const { activeCategory } = useContext(ActiveContext);
  const { SetEditor, SetReadOnly, SetInputValue, SetCategory } = useContext(EditorContext);
  const { SetNote, SetAddNote, noteDispatch } = useContext(NoteContext);

  // Testing custom hooks
  const { onSelected, selectedNote } = useNote();

  useEffect(() => {
    async function fetchData() {
      const result = await getNotes(activeCategory || 'ALL');
      setNotes(result);
    }
    fetchData();
  }, [activeCategory, noteDispatch]);

  const onClick = (note: INote) => {
    SetAddNote(false);
    SetNote(note);
    onSelected(note)
    SetReadOnly(true);
    SetEditor(note.data.value);
    SetInputValue(note.data.name);
    SetCategory(note.data.category);
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
