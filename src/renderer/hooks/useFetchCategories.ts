import { useEffect, useState } from "react";
import { fetchCategories } from "../db/db";
import DefaultCategories from "../db/DefaultCategories";
import { ICategories } from "../interfaces";

export const useFetchCategories = () => {
  const [categories, setCategories] = useState<ICategories[]>([]);

  useEffect(() => {
    async function fetchData() {
      await DefaultCategories();
      const result = await fetchCategories();
      setCategories(result);
    }
    fetchData();

  }, []);



  return {categories};
}
