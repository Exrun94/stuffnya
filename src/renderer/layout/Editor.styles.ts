import styled from 'styled-components';

export const Title = styled.input`
  font-family: 'Roboto', sans-serif;
  font-size: 32px;
  font-weight: normal;
  font-weight: 400;
  line-height: 16px;
  margin-bottom: 1rem;
  color: white;
  outline: none;
  background: transparent;
  border: none;

  &::placeholder {
    color: white;
  }
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

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 1rem;
`;
