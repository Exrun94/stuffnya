import { useContext, useEffect, useState } from "react";
import { fetchNotes } from "../db/Notes";
import { GlobalContext } from '../context/GlobalContext';
import { INote } from "../interfaces";

export const useFetchNotes = () => {
  const { selectedCategory } = useContext(GlobalContext);
  const [notes, setNotes] = useState<INote[]>([]);

  useEffect(() => {
    async function fetchData() {
      const result = await fetchNotes(selectedCategory || 'ALL');
      setNotes(result);
    }
    fetchData();
  }, [selectedCategory]);

  return {notes};

}

