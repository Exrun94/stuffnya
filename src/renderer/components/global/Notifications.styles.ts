import styled from 'styled-components';
import { motion } from 'framer-motion';

import success from '../../../../assets/icons/icon-success.svg';
import warning from '../../../../assets/icons/icon-warning.svg';
import error from '../../../../assets/icons/icon-error.svg';

export const Container = styled(motion.div)`
  display: flex;
  align-items: center;
  position: fixed;
  top: 70px;
  left: 50%;
  width: 250px;
  height: 40px;
  margin-left: -125px;
  background-color: ${props => props.color};
  z-index: 2;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;

  /* animation: fade 1s linear forwards;

  @keyframes fade {
  from {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

} */

`;

export const IconWrapper = styled.div<{ subColor: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.subColor};
  width: 45px;
  height: 100%;
`;

export const Icon = styled.img`
  width: 24px;
  height: 24px;
  animation: blinker 1s linear infinite;

  @keyframes blinker {
  50% {
    opacity: 0;
    };
  }
`;

export const IconSuccess = styled.img`
  width: 24px;
  height: 24px;
  src: ${success};
  animation: blinker 1s linear infinite;

  @keyframes blinker {
  50% {
    opacity: 0;
    };
  }
`;

export const IconError = styled.img`
  width: 24px;
  height: 24px;
  src: ${error};
  animation: blinker 1s linear infinite;

  @keyframes blinker {
  50% {
    opacity: 0;
    };
  }
`;

export const IconWarning = styled.img`
  width: 24px;
  height: 24px;
  src: ${warning};
  animation: blinker 1s linear infinite;

  @keyframes blinker {
  50% {
    opacity: 0;
    };
  }
`;


export const Message = styled.div`
  color: #fff;
  margin-left: 24px;
`;
