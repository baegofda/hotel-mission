import styled from '@emotion/styled';
import React from 'react';

interface IProps {
  name: string;
}

const Dummy = ({ name }: IProps) => {
  return (
    <Wrapper>
      <Name>{name}</Name>
    </Wrapper>
  );
};

export default Dummy;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #ededed;
`;

const Name = styled.span`
  ${({ theme }) => theme.fontSizes.font16}

  color: #979b9f;
`;
