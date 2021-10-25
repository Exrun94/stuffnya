import React, { useState } from 'react';
import folderIcon from '../../../assets/icons/folder.svg';
import minusIcon from '../../../assets/icons/minus.svg';
import plusIcon from '../../../assets/icons/plus.svg';
import {
  Container,
  IconLeft,
  IconRight,
  ToggledWrapper,
} from './Categories.styles';

let icon = plusIcon;

const QuickLinks = () => {
  const [toggle, setToggle] = useState(false);

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
        QUICK LINKS
        <IconRight src={icon} />
      </Container>
      <ToggledWrapper open={toggle}>Comming Soon &trade;</ToggledWrapper>
    </>
  );
};

export default QuickLinks;
