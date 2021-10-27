import styled from 'styled-components/';

export const MainButton = styled.button<{ width?: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--royal-base);
  color: #fff;
  /* margin-left: 12px; */
  gap: 5;
  width: ${(props) => props.width}rem;
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
