import styled from 'styled-components';
import Select from 'react-select';

export const CustomSelect = styled(Select)`
  & .Select__indicator Select__dropdown-indicator {
    border-color: transparent transparent red;
  }
`;
