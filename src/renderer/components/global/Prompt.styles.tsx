import styled from 'styled-components';
import { motion } from 'framer-motion';


export const Container = styled.div`
  display: grid;
  grid-row-start: 1;
  grid-column-start: 1;
  grid-row-end: 6;
  grid-column-end: 6;
  height: 100%;
  width: 100%;
  z-index: 2;
  background-color: hsla(0, 0%, 30%, 0.8);
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--primary-800);
  width: 100%;
  height: 30px;
  border-radius: 6px 6px 0 0;
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
`;

export const MotionMenu = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 450px;
  height: 180px;
  background-color: var(--primary-900);
  border-radius: 6px;
`;

export const InfoText = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  font-weight: normal;
  font-weight: 400;
  color: var(--primary-100);
  padding-top: 8px;
`;

export const InfoSubText = styled.h3`
  font-size: 12px;
  font-weight: normal;
  font-weight: 400;
  color: var(--primary-400);
  padding-top: 8px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 24px;
  gap: 12px;
`;

export const Button = styled.button<{fill: string}>`
  color: #ffffff;
  background-color: transparent;
  cursor: pointer;
  font-size:16px;
  font-weight: 400;
  line-height: 45px;
  margin: 0 0 2em;
  max-width: 160px;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  width: 100%;

  border: 0 solid;
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);
  outline: 1px solid;
  outline-color: #ffffff7f;
  outline-offset: 0px;
  text-shadow: none;
  transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);

  &:hover {
    background-color: ${props => props.fill};
    outline-color: rgba(255, 255, 255, 0);
    outline-offset: 15px;
    text-shadow: 1px 1px 2px #6400e7;
  }
`;





