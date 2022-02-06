import React from 'react';
import sgLogo from '../../../assets/icons/stuffnya.svg';
import { Header, Logo } from './Layout.styles';

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
