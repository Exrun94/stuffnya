import styled from 'styled-components';

type ToggleWrapperProps = {
  open: boolean;
};

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
  padding: 8px 12px 8px 12px;
  height: 32px;
  background-color: var(--primary-800);
  color: var(--primary-400);
  transition: all 0.3s ease-out;
  //font-family: 'Roboto';
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.0015em;
  margin-left: 4px;
  &:hover {
    cursor: pointer;
  }
`;

export const IconLeft = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 8px;
`;

export const IconRight = styled.img`
  width: 20px;
  height: 20px;
  margin-left: auto;
`;

export const ToggledWrapper = styled.div<ToggleWrapperProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  opacity: ${(props) => (props.open ? '1' : '0')};
  padding: ${(props) => (props.open ? '12px 0' : '0')};
  max-height: ${(props) => (props.open ? '33%' : '0')};
  background-color: var(--primary-800);
  color: var(--primary-400);
  transition: all 0.3s ease-out;
  overflow-x: hidden;
`;

export const AddNew = styled.button`
  background-color: transparent;
  border: none;
  color: var(--primary-400);
  font-family: 'Roboto, Helvetica';

  &:hover {
    cursor: pointer;
    color: var(--royal-base);
  }
`;

export const ColorIndicator = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  box-shadow: 0px 0px 5px ${(props) => props.color};
  //cursor: pointer;
`;

export const CategoryList = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-right: auto;
  width: 100%;
  padding: 8px 12px 8px 12px;
  &:hover {
    cursor: pointer;
    background-color: var(--primary-600);
  }
`;

export const CategoryName = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: normal;
  font-weight: 400;
  line-height: 16px;
  color: var(--primary-400);
  padding-left: 12px;
`;
