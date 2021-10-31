/* eslint-disable react/button-has-type */
import React from 'react';
import sgLogo from '../../../assets/icons/stuffnyata@20.png';
import { Header, Logo } from './Layout.styles';

/*
Custom Logo svg can be found in the assets folder stuffnyata.svg
made at https://boxy-svg.com/app/disk:5VwTTsTI7S
*/

const HeaderComponent: React.FC = () => {
  return (
    <>
      <Header>
        <Logo src={sgLogo} />
      </Header>
    </>
  );
};

export default HeaderComponent;
