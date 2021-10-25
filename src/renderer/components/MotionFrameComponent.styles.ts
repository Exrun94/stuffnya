import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
  display: grid;
  grid-row-start: 2;
  grid-column-start: 2;
  grid-row-end: 6;
  grid-column-end: 6;
  height: 100%;
  width: 100%;
  z-index: 1;
  background-color: hsla(0, 0%, 30%, 0.8);
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: center;
`;

export const MotionMenu = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  background-color: var(--primary-900);
  padding: 25px;
`;

export const CloseBtn = styled.button`
  position: absolute;
  right: 32px;
  top: 32px;
  width: 32px;
  height: 32px;
  opacity: 0.3;

  &:hover {
    opacity: 0.5;
  }
  &::before,
  &::after {
    position: absolute;
    left: 14px;
    top: -2px;
    content: ' ';
    height: 33px;
    width: 2px;
    background-color: var(--primary-900);
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }
`;

export const Input = styled.input`
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 18px;
  margin-bottom: 24px;
  line-height: 1.5;
  padding: 15px 10px;
  border: 1px solid var(--primary-600);
  color: var(--primary-200);
  outline: none;
  background: var(--primary-800);
  transition: background-color 0.3s cubic-bezier(113, 0, 189, 1),
    transform 0.3s cubic-bezier(113, 0, 189, 1);
`;
