import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 7rem;
  padding: 8px;
  border-bottom: 1px solid black;
`;

export const ColorIndicator = styled.div`
  border-left: 5px solid limegreen;
`;

export const Wrapper = styled.div`
  display: flex;
  margin-bottom: 8px;
`;

export const Category = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  color: var(--primary-400);
`;

export const Date = styled.p`
  margin-left: auto;
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  color: var(--primary-400);
`;

export const Name = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  color: white;
  margin-bottom: 8px;
`;

export const Content = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  color: var(--primary-400);
`;
