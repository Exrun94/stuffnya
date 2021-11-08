import React, { useEffect, useState } from 'react';
import success from '../../../../assets/icons/icon-success.svg';
import warning from '../../../../assets/icons/icon-warning.svg';
import error from '../../../../assets/icons/icon-error.svg';

import { INotifications } from '../../interfaces/notifications';
import { Container, IconWrapper, Icon, Message } from './Notifications.styles';

let icon: string;
let color: string;
let subColor: string;

const dropIn = {
  hidden: {
    y: '-100px',
    opacity: 0,
  },
  visible: {
    y: '0px',
    opacity: 1,
    transition: {
      duration: 2,
      type: 'spring',
      damping: 15,
      stiffness: 500,
    },
  },
  exit: {
    y: '-25px',
    opacity: 0,
  },
};


const Notifications = ({ type, message }: INotifications) => {

  const [visible, SetVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      SetVisible(false);
    }, 2000);
  }, []);

  switch(type) {
    case 'success':
      icon = success, color = 'var(--success-300)', subColor = 'var(--success-500)';
      break;
    case 'warning':
      icon = warning, color = 'var(--warning-300)', subColor = 'var(--warning-500)';
      break;
    case 'error':
      icon = error, color = 'var(--error-300)', subColor = 'var(--error-500)';
      break;
    default: icon = error, color = '#fff';
  };

  return (
    <>
      {visible && <Container
      color={color}
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
      >
        <IconWrapper subColor={subColor}>
          <Icon src={icon} />
        </IconWrapper>
        <Message>{message}</Message>
      </Container>}
    </>
  );
};

export default Notifications;
