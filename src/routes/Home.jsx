import { Link, useOutletContext } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { transparentize } from 'polished';
import { Icon } from '../components/Icon/Icon';
import { formatTime } from '../utils';

const TRANSITION = css`
  transition: all 0.25s;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.line};
  padding-bottom: 8px;
`;

const BrewLinkContainer = styled(Link)`
  align-items: center;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: space-between;
  margin: 8px 0;
  padding: 16px 8px;
  width: 100%;
  ${TRANSITION};
  &:hover {
    background-color: ${({ theme }) => transparentize(0.8, theme.colors.ink)};
  }

  &:hover > svg {
    color: ${({ theme }) => theme.colors.ink};
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 2;
`;

const CaretIcon = styled(Icon).attrs({
  type: 'caret-right',
  size: 'md',
})`
  color: ${({ theme }) => theme.colors.line};
`;

const Details = styled.span`
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 14px;
  font-weight: 700;
`;

const Divider = styled.div`
  background-color: ${({ theme }) => theme.colors.line};
  height: 1px;
  width: 100%;
`;

const Home = () => {
  const methods = useOutletContext();
  return (
    <Container>
      <Header>
        <h3>You Do Brew</h3>
      </Header>
      {methods &&
        methods.map((method) => (
          <span key={method.slug}>
            <BrewLinkContainer to={method.slug}>
              <Icon size="xl" type={method.slug} />
              <InfoContainer>
                <h3>{method.title}</h3>
                <Details>
                  {formatTime(method.totalTime)} / {method.weight}g
                </Details>
              </InfoContainer>
              <CaretIcon />
            </BrewLinkContainer>
            <Divider />
          </span>
        ))}
    </Container>
  );
};

export default Home;
