import styled from 'styled-components/';

export const MainButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--royal-base);
  color: #fff;
  margin-top: 24px;
  width: 450px;
  height: 32px;
  border: none;
  border-radius: 3px;

  &:hover {
    background-color: var(--royal-dark);
    cursor: pointer;
  }
`;

export const Button = styled.button`
  display: flex;
`;
