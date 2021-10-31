/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect, useContext } from 'react';
import { useStore, useStoreState } from 'react-context-hook';
import folderIcon from '../../../../assets/icons/folder.svg';
import minusIcon from '../../../../assets/icons/minus.svg';
import plusIcon from '../../../../assets/icons/plus.svg';
import { Container, IconLeft, IconRight, ToggledWrapper, AddNew, ColorIndicator, CategoryList, CategoryName, } from './Categories.styles';
import { getCategories as fetchCategories } from '../../db/db';
import { CategoriesContext } from '../../context/CategoriesContext';
import { ActiveContext } from '../../context/ActiveContext';
import DefaultCategories from '../../db/DefaultCategories';

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
  const {setActiveCategory} = useContext(ActiveContext);
  const storeState = useStoreState();
  const categoriesContext = useContext(CategoriesContext);


  useEffect(() => {
    async function fetchData() {
      await DefaultCategories();
      const result = await fetchCategories();
      setData(result);
      categoriesContext.setCategories(result);
    }
    fetchData();

  }, [storeState.alert]);

  const toggleSwitch: React.MouseEventHandler<HTMLDivElement> = (): void => {
    setToggle(!toggle);

    if (toggle) {
      icon = plusIcon;
    } else {
      icon = minusIcon;
    }
  };

  const onClick = (el: DataProps): void => {
    setActive(el);
    setActiveCategory(el.data.name)
  }

  return (
    <>
      <Container onClick={toggleSwitch}>
        <IconLeft src={folderIcon} />
        CATEGORIES
        <IconRight src={icon} />
      </Container>
      <ToggledWrapper open={toggle}>
        <AddNew onClick={() => setState(!state)}>+ Add New</AddNew>
        {data.map((el) => {
        return (
          <CategoryList key={el.key} onClick={() => onClick(el)} className={el === active ? "active" : ""}>
            <ColorIndicator color={el.data.color}/>
            <CategoryName>{el.data.name}</CategoryName>
          </CategoryList>
        );
      })}
      </ToggledWrapper>
    </>
  );
};

export default Categories;
