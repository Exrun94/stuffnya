/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/ban-types */
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
            // eslint-disable-next-line react/no-array-index-key
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

// Props to receive, Component, UniqueID, HandleClick
