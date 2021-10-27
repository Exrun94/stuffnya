import styled from 'styled-components';

export const Container = styled.div`
  border-bottom: 1px solid black;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  width: 80%;
`;

export const CategoryHeading = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-size: 50px;
  color: white;
`;

export const NotesCount = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  color: white;
  padding-top: 24px;
`;

export const Search = styled.input`
  background-color: transparent;
  border: 1px solid var(--primary-400);
  border-radius: 4px;
  outline: none;
  padding: 8px;
  margin-top: 12px;
  margin-bottom: 12px;
  width: 100%;
  color: var(--primary-400);
`;
