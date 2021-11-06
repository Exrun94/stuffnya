/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import React, { useState, useContext } from 'react';
import { useStore } from 'react-context-hook';
import folderIcon from '../../../../assets/icons/folder.svg';
import minusIcon from '../../../../assets/icons/minus.svg';
import plusIcon from '../../../../assets/icons/plus.svg';
import { Container, IconLeft, IconRight, ToggledWrapper, AddNew, ColorIndicator, CategoryList, CategoryName, } from './Categories.styles';
import { GlobalContext } from '../../context/GlobalContext';
import { useFetchCategories } from '../../hooks/useFetchCategories';
import { ICategories } from '../../interfaces';

let icon = minusIcon;


const Categories = () => {
  const [toggle, setToggle] = useState(true);
  const [active, setActive] = useState<ICategories>();
  const [state, setState] = useStore('state', false);

  //new way
  const { setSelectedCategory } = useContext(GlobalContext);
  const { categories } = useFetchCategories();

  const toggleSwitch: React.MouseEventHandler<HTMLDivElement> = (): void => {
    setToggle(!toggle);

    if (toggle) {
      icon = plusIcon;
    } else {
      icon = minusIcon;
    }
  };

  const onClick = (el: ICategories): void => {
    setActive(el);
    setSelectedCategory(el.data.name)
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
        {categories.map((el) => {
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
