import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { fetchCategories } from "../db/db";
import { ICategories } from "../interfaces";

export const useFetchCategories = () => {
  const [categories, setCategories] = useState<ICategories[]>([]);
  const {newCategoryAddedTrigger, newNoteAddedTrigger} = useContext(GlobalContext);

  useEffect(() => {

    setTimeout(async() => {

        const data = await fetchCategories();
        setCategories(data);
    }, 0)

  }, [newCategoryAddedTrigger, newNoteAddedTrigger]);

  return {categories};
}


