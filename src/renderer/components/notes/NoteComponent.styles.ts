import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 7rem;
  padding: 8px;
  border-bottom: 1px solid black;

  &:hover {
    cursor: pointer;
    background-color: var(--primary-700);
  }

  &.active {
    background-color: var(--primary-700);
  }
`;

export const ColorIndicator = styled.div`
  border-left: 5px solid ${(props) => props.color};
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
  overflow: hidden;
  max-height: 2rem;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  color: var(--primary-400);
`;

export const TagsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: auto;
`;

export const Tags = styled.span`
  background-color: var(--royal-lighter);
  opacity: 0.7;
  color: var(--royal-dark);
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  border-radius: 4px;
  padding: 2px 4px 2px 4px;
  margin-left: 4px;
`;
