import styled from 'styled-components';
import { ContextMenu, MenuItem, ContextMenuTrigger } from 'react-contextmenu';

export const StyledCtxMenu = styled(ContextMenu)`
  color: var(--primary-200);
  min-width: 200px;
  width: 15rem;
  border-radius: 100px;
`;

export const StyledMenuItem = styled(MenuItem)`
  background-color: var(--primary-900);
  opacity: 0.7;
  filter: blur(0.3px);
  padding: 4px 0 4px 12px;
  &:hover {
    color: var(--royal-base);
    cursor: pointer;
  }
`;

export const StyledCtxMenuTrigger = styled(ContextMenuTrigger)`
  background-color: yellow;
  border-radius: 100px;
`;

export const Divider = styled.div`
  border-top: 1px solid var(--primary-500);
  margin: 4px 12px 4px 0;
`;
