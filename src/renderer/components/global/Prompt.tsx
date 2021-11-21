import React, { useContext } from 'react';
import icon from '../../../../assets/icons/icon-info.svg';
import { GlobalContext } from '../../context/GlobalContext';
import { useEditor } from '../../hooks/useEditor';
import { Container, Wrapper, MotionMenu, Header, Icon, InfoText, InfoSubText, Button, ButtonWrapper } from './Prompt.styles';

const dropIn = {
  hidden: {
    y: '-100vh',
    opacity: 0,
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      duration: 0.5,
      type: 'spring',
      damping: 20,
      stiffness: 750,
    },
  },
  exit: {
    y: '100vh',
    opacity: 0,
  },
};


const Prompt = () => {
  const {promptState, setPromptState} = useContext(GlobalContext)
  const { onDelete, onCancel } = useEditor();

  function onAccept() {
    switch(promptState.type) {
      case 'DELETE_NOTE':
        onDelete();
        break;
      case 'CANCEL_NOTE_EDIT':
        onCancel();
        break;

    }
    setPromptState({ state: false, type: 'NONE'})
  }

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
          <Header>
            <Icon src={icon}/>
          </Header>
          <InfoText>Are you sure?</InfoText>
          <InfoSubText>You won't be able to revert this!</InfoSubText>
          <ButtonWrapper>
            <Button fill="#10B981" onClick={onAccept}>Yes</Button>
            <Button fill="#F44444" onClick={() => setPromptState({state: false, type: 'NONE'})}>Cancel</Button>
          </ButtonWrapper>
        </MotionMenu>
        </Wrapper>
      </Container>
    </>
  )
}

export default Prompt
