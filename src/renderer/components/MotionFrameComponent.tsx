import React, { useState } from 'react';
import { useStore } from 'react-context-hook';
import { ColorPicker, useColor } from 'react-color-palette';
import {
  Container,
  MotionMenu,
  Wrapper,
  CloseBtn,
  Input,
} from './MotionFrameComponent.styles';
import { MainButton } from './Button.styles';
import { addCategory } from '../db/db';

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
  const [alert, setAlert] = useStore('alert', false);
  const [color, setColor] = useColor('hex', '#fff');
  const [input, setInput] = useState('');

  const onClick = () => {
    if (input === '') {
      return;
    }

    addCategory({ name: input, color: color.hex });
    setInput('');
    setState(!state);
    setAlert(!alert);
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
              value={input}
              onChange={(e) => setInput(e.target.value)}
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
