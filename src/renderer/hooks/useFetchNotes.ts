import { useContext, useEffect, useState } from "react";
import { fetchAllNotes, fetchNotes } from "../db/db";
import { GlobalContext } from '../context/GlobalContext';
import { INote } from "../interfaces";

export const useFetchNotes = () => {
  const { selectedCategory, newNoteAddedTrigger } = useContext(GlobalContext);
  const [notes, setNotes] = useState<INote[]>([]);

  useEffect(() => {
    async function fetchData() {
      if(selectedCategory === 'ALL') {
        const result = await fetchAllNotes();
        setNotes(result);
      }
      else {
        const result = await fetchNotes(selectedCategory);
        setNotes(result);
      }
    }
    fetchData();
  }, [selectedCategory, newNoteAddedTrigger]);

  return {notes};

}

