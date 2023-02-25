import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { localHotelCategoryState, localHotelCurrentIdxState } from '../../store';

const LocalCategory = ({ categories }: { categories: string[] }) => {
  const [localHotelCategory, setLocalHotelCategory] = useRecoilState(localHotelCategoryState);
  const resetLocalHotelCurrentIdx = useResetRecoilState(localHotelCurrentIdxState);

  const onClickFilter = (category: string) => {
    resetLocalHotelCurrentIdx();
    setLocalHotelCategory(category);
  };

  return (
    <Categories>
      {categories.map(category => (
        <Category key={category}>
          <CategoryBtn
            isChecked={localHotelCategory === category}
            onClick={() => onClickFilter(category)}
            aria-checked={localHotelCategory === category}
          >
            {category}
          </CategoryBtn>
        </Category>
      ))}
    </Categories>
  );
};

export default LocalCategory;

const Categories = styled.ul`
  display: flex;
  align-items: center;
  margin-bottom: 40px;

  ${({ theme }) => theme.media.sm} {
    margin-bottom: 80px;
  }
`;

const Category = styled.li`
  display: flex;
  align-items: center;

  &::after {
    content: '';
    width: 1px;
    height: 20px;
    margin: 0 12px;
    background-color: #979b9f;

    ${({ theme }) => theme.media.sm} {
      margin: 0 20px;
    }
  }

  &:last-child::after {
    display: none;
  }
`;

const CategoryBtn = styled.button<{ isChecked: boolean }>`
  &:hover {
    color: #fff;
  }

  ${({ theme, isChecked }) => css`
    ${theme.fontSizes.font16}

    width: 52px;
    color: ${isChecked ? '#fff' : '#979b9f'};
    font-weight: ${isChecked ? 700 : 400};

    ${theme.media.sm} {
      ${theme.fontSizes.font24}

      width: 100px;
    }
  `}
`;
