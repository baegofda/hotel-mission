import styled from '@emotion/styled';
import React from 'react';
import Menu from './Menu';
import useNavigationMenu from '@/hooks/useNavigationMenu';

const MobileNavigation = () => {
  const { items } = useNavigationMenu();

  return (
    <Wrapper>
      <Menus>
        {items.map(item => (
          <Menu key={item.key} item={item} />
        ))}
      </Menus>
    </Wrapper>
  );
};

export default MobileNavigation;

const Wrapper = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0 7.5px calc(constant(safe-area-inset-bottom));
  padding: 0 7.5px calc(env(safe-area-inset-bottom));
  background-color: #fff;
  box-shadow: 4px 4px 20px rgba(48, 55, 63, 0.2);
  z-index: 2;
`;

const Menus = styled.ul`
  display: flex;
  justify-content: center;
  column-gap: 15px;
`;
