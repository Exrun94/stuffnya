import React, { useState, useContext } from 'react';
import { useStore } from 'react-context-hook';
import { ColorPicker, useColor } from 'react-color-palette';
import { MainButton } from '../global/Button.styles';
import { addCategory } from '../../db/db';
import { GlobalContext } from '../../context/GlobalContext';
import { Container, MotionMenu, Wrapper, CloseBtn, Input, } from './MotionFrameComponent.styles';

const dropIn = {
  hidden: {
    y: '-100vh',
    opacity: 0,
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: '100vh',
    opacity: 0,
  },
};

const MotionFrameComponent = () => {
  const [state, setState] = useStore('state', false);
  const [color, setColor] = useColor('hex', '#fff');
  const [categoryName, setCategoryName] = useState('');
  const {newCategoryAddedTrigger, setNewCategoryAddedTrigger} = useContext(GlobalContext);

  const onClick = () => {
    if (categoryName === '') {
      return;
    }
    addCategory({ name: categoryName, color: color.hex });
    setCategoryName('');
    setState(!state);
    setNewCategoryAddedTrigger(!newCategoryAddedTrigger)
  };

  return (
    <>
      <Container>
        <Wrapper>
          <MotionMenu
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <CloseBtn onClick={() => setState(!state)} />
            <Input
              type="text"
              placeholder="Category Name..."
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
            />
            <ColorPicker
              width={450}
              height={100}
              color={color}
              onChange={setColor}
              hideHSV
              hideRGB
              hideHEX
              dark
            />
            <MainButton onClick={onClick}>CREATE</MainButton>
          </MotionMenu>
        </Wrapper>
      </Container>
    </>
  );
};

export default MotionFrameComponent;
