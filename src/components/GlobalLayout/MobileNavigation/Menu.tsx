import styled from '@emotion/styled';
import React from 'react';
import { IcoCategory, IcoHome, IcoMyPage, IcoNotification } from '@/components/Icons';
import TLink from '@/components/TLink';
import { TNavigationMenu } from '@/types/Navigation';

interface IProps {
  item: TNavigationMenu;
}

const Menu = ({ item }: IProps) => {
  const { key, link, name, isActive } = item;
  const size = 22;
  let content;

  switch (key) {
    case 'main':
      content = <IcoHome width={size} height={size} />;
      break;
    case 'search':
      content = <IcoCategory width={size} height={size} />;
      break;
    case 'notifications':
      content = <IcoNotification width={size} height={size} />;
      break;
    case 'mypage':
      content = <IcoMyPage width={size} height={size} />;
      break;

    default:
      return null;
  }

  return (
    <Wrapper>
      <TLink href={link}>
        <MenuLink isActive={isActive}>
          {content}
          <MenuName>{name}</MenuName>
        </MenuLink>
      </TLink>
    </Wrapper>
  );
};

export default Menu;

const Wrapper = styled.li`
  min-width: 75px;
  flex-grow: 1;
`;

const MenuLink = styled.a<Pick<TNavigationMenu, 'isActive'>>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 8px;
  padding-bottom: 2px;
  color: ${({ isActive }) => (isActive ? '#03936E' : '#979b9f')};
`;

const MenuName = styled.span`
  ${({ theme }) => theme.fontSizes.font10}
`;
