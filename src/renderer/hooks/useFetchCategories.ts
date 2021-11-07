import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { fetchCategories } from "../db/db";
import { ICategories } from "../interfaces";

export const useFetchCategories = () => {
  const [categories, setCategories] = useState<ICategories[]>([]);
  const {newCategoryAddedTrigger} = useContext(GlobalContext);

  useEffect(() => {

    setTimeout(async() => {

        const result = await fetchCategories();
        setCategories(result);
        console.log('fetched');
    }, 200)

  }, [newCategoryAddedTrigger]);

  return {categories};
}


