import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { localHotelCategoryState, localHotelCurrentIdxState } from '../../store';

const LocalCategory = ({ categories }: { categories: string[] }) => {
  const [localHotelCategory, setLocalHotelCategory] = useRecoilState(localHotelCategoryState);
  const resetLocalHotelCurrentIdx = useResetRecoilState(localHotelCurrentIdxState);

  const onChangeFilter = (e: React.FormEvent<HTMLInputElement>) => {
    resetLocalHotelCurrentIdx();
    setLocalHotelCategory(e.currentTarget.value);
  };

  return (
    <Categories>
      <legend className="sr-only">지역 선택하기</legend>
      {categories.map(category => (
        <Category key={category} htmlFor={category}>
          <input
            className="hide"
            id={category}
            type="radio"
            value={category}
            name={'local'}
            onChange={onChangeFilter}
            defaultChecked={localHotelCategory === category}
          />
          <Local>{category}</Local>
        </Category>
      ))}
    </Categories>
  );
};

export default LocalCategory;

const Categories = styled.fieldset`
  display: flex;
  align-items: center;
  margin-bottom: 40px;

  ${({ theme }) => theme.media.sm} {
    margin-bottom: 80px;
  }
`;

const Category = styled.label`
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

const Local = styled.div`
  ${({ theme }) => theme.fontSizes.font24}

  color: #979b9f;
  text-align: center;
  cursor: pointer;

  input[type='radio']:checked ~ & {
    color: #fff;
    font-weight: 700;
  }

  &:hover {
    color: #fff;
  }

  ${({ theme }) => css`
    ${theme.fontSizes.font16}
    width: 52px;

    ${theme.media.sm} {
      ${theme.fontSizes.font24}

      width: 100px;
    }
  `}
`;
