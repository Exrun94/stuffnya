/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect, useContext } from 'react';
import { useStore, useStoreState } from 'react-context-hook';
import folderIcon from '../../../assets/icons/folder.svg';
import minusIcon from '../../../assets/icons/minus.svg';
import plusIcon from '../../../assets/icons/plus.svg';
import { Container, IconLeft, IconRight, ToggledWrapper, AddNew, ColorIndicator, CategoryList, CategoryName, } from './Categories.styles';
import { getCategories as fetchCategories } from '../db/db';
import { CategoriesContext } from '../context/CategoriesContext';

let icon = minusIcon;

type DataProps = {
  data: {
    name: string;
    color: string;
  };
  key: string;
};

const Categories = () => {
  const [toggle, setToggle] = useState(true);
  const [active, setActive] = useState({} as DataProps);
  const [state, setState] = useStore('state', false);
  const [data, setData] = useState<DataProps[]>([]);
  const alert = useStoreState();
  const categoriesContext = useContext(CategoriesContext)

  useEffect(() => {
    async function fetchData() {
      const result = await fetchCategories();
      setData(result);
      categoriesContext.setCategories(result);
    }
    fetchData();
  }, [alert]);

  const toggleSwitch: React.MouseEventHandler<HTMLDivElement> = (): void => {
    setToggle(!toggle);

    if (toggle) {
      icon = plusIcon;
    } else {
      icon = minusIcon;
    }
  };

  return (
    <>
      <Container onClick={toggleSwitch}>
        <IconLeft src={folderIcon} />
        CATEGORIES
        <IconRight src={icon} />
      </Container>
      <ToggledWrapper open={toggle}>
        <AddNew onClick={() => setState(!state)}>+ Add New</AddNew>
        {data.map((d) => {
        return (
          <CategoryList key={d.key} onClick={() => setActive(d)} className={d === active ? "active" : ""}>
            <ColorIndicator color={d.data.color}/>
            <CategoryName>{d.data.name}</CategoryName>
          </CategoryList>
        );
      })}
      </ToggledWrapper>
    </>
  );
};

export default Categories;
