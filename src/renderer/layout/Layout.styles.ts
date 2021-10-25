/* eslint-disable @typescript-eslint/prefer-namespace-keyword */
import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-rows: 56px auto 45px;
  //grid-template-columns: 56px 250px 450px 1fr 173px;
  //grid-template-columns: 56px 0.2fr 0.5fr 1fr 0.2fr;
  //grid-template-columns: 56px 0.2fr 0.5fr 1fr 0.2fr;
  grid-template-columns: 56px 0.3fr 0.5fr 1fr 0.3fr;
  height: 100vh;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  background-color: var(--primary-900);
  grid-row-start: 1;
  grid-column-start: 1;
  grid-row-end: 2;
  grid-column-end: 6;
`;

export const Logo = styled.img`
  width: 190px;
  height: 40px;
`;

export const SideNavContainer = styled.div`
  background-color: var(--primary-900);
  grid-row-start: 2;
  grid-column-start: 1;
  grid-row-end: 4;
  grid-column-end: 2;
`;

export const CategoriesContainer = styled.div`
  background-color: var(--primary-800);
  grid-row-start: 2;
  grid-column-start: 2;
  grid-row-end: 4;
  grid-column-end: 3;
  border-left: 1px solid black;
  border-right: 1px solid black;
`;

export const NotesContainer = styled.div`
  background-color: var(--primary-600);
  grid-row-start: 2;
  grid-column-start: 3;
  grid-row-end: 4;
  grid-column-end: 4;
`;

export const EditorContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: var(--primary-700);
  grid-row-start: 2;
  grid-column-start: 4;
  grid-row-end: 4;
  grid-column-end: 5;
`;

export const EditorWrapper = styled.div`
  width: 90%;
  margin-top: 3rem;
`;

export const ClientContainer = styled.div`
  background-color: var(--primary-800);
  grid-row-start: 2;
  grid-column-start: 5;
  grid-row-end: 4;
  grid-column-end: 6;
`;
