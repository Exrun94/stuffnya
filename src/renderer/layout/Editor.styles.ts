import styled from 'styled-components';

export const Title = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-size: 32px;
  font-weight: normal;
  font-weight: 400;
  line-height: 16px;
  color: var(--primary-100);
  margin-bottom: 1rem;
`;

export const Select = styled.select`
  width: 40%;
  outline: none;
  background-color: var(--primary-600);
  color: var(--primary-400);
  height: 24px;
  font-family: 'Roboto', sans-serif;
  font-size: 10px;
  padding-left: 4px;
`;

export const Option = styled.option`
  background-color: var(--primary-500);
`;

export const TagIcon = styled.img`
  width: 14px;
  height: 14px;
  margin-left: 2rem;
`;

export const DivWrapper = styled.div`
  display: flex;
  align-items: center;
`;
