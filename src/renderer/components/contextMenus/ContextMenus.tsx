import React, { ReactNode } from 'react';
import { StyledCtxMenuTrigger, StyledCtxMenu, StyledMenuItem } from './ContextMenus.styles';

type Props = {
  component: ReactNode;
  id: string;
  utensils: {
    name: string;
    handleClick: (e: any) => any;
  }[];
};

const ContextMenus = (props: Props) => {
  const { component, id, utensils } = props;

  return (
    <>
      <StyledCtxMenuTrigger id={id}>{component}</StyledCtxMenuTrigger>
      <StyledCtxMenu id={id}>
        {utensils.map((menu, index) => {
          return (
            <StyledMenuItem key={id + index} onClick={menu.handleClick}>
              {menu.name}
            </StyledMenuItem>
          );
        })}
      </StyledCtxMenu>
    </>
  );
};

export default ContextMenus;
