import React, { useState } from 'react';
import folderIcon from '../../../../assets/icons/folder.svg';
import minusIcon from '../../../../assets/icons/minus.svg';
import plusIcon from '../../../../assets/icons/plus.svg';
import {
  Container,
  IconLeft,
  IconRight,
  ToggledWrapper,
  RainBowText,
} from './Categories.styles';

let icon = plusIcon;

const Tags = () => {
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
        TAGS
        <IconRight src={icon} />
      </Container>
      <ToggledWrapper open={toggle}>
        <RainBowText>Comming Soon &trade;</RainBowText>
      </ToggledWrapper>
    </>
  );
};

export default Tags;
