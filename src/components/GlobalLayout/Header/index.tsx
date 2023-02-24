import styled from '@emotion/styled';
import SearchLink from './SearchLink';
import UserLogin from './UserLogin';
import TLink from '@/components/TLink';
import useMediaQuery from '@/hooks/useMediaQuery';

const Header = () => {
  const { isRange } = useMediaQuery('sm');

  return (
    <Wrapper>
      <Container>
        <h1>
          <TLink href={'/'}>
            <a>
              <LogoWrapper>
                <source srcSet="/images/icons/ico-logo.svg" media="(min-width: 576px)" />
                <img src="/images/icons/ico-logo-m.svg" alt="호텔에삶" />
              </LogoWrapper>
            </a>
          </TLink>
        </h1>
        <SearchLink isRange={isRange} />
        {isRange && <VerticalBar />}
        <UserLogin isRange={isRange} />
      </Container>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  position: sticky;
  top: 0;
  background-color: #fff;
  z-index: 2;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
  max-width: 800px;
  margin: 0 auto;
  padding: 16px;

  ${({ theme }) => theme.media.sm} {
    padding-right: 24px;
  }
`;

const LogoWrapper = styled.picture`
  display: flex;
`;

const VerticalBar = styled.div`
  width: 1px;
  height: 16px;
  background-color: #6e7378;
`;
