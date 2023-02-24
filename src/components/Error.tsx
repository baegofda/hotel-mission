import styled from '@emotion/styled';
import React from 'react';

const Error = ({ statusCode }: { statusCode: number }) => {
  const content =
    statusCode === 404 ? (
      '페이지를 찾을 수 없습니다.'
    ) : (
      <>
        oops..
        <br />
        {statusCode} error..
      </>
    );

  return (
    <Wrapper>
      <Text>{content}</Text>
    </Wrapper>
  );
};

export default Error;

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

const Text = styled.p`
  ${({ theme }) => theme.fontSizes.font32}

  color: #979b9f;
  font-weight: 500;
`;
