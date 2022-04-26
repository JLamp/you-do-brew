import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { transparentize } from 'polished';
import { getGuides } from '../data';
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
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
  justify-content: space-between
  width: 100%;
  padding: 16px 8px;
  cursor: pointer;
  border-radius: 8px;
  margin: 8px 0;
  ${TRANSITION};
  &:hover {
    background-color: ${({ theme }) => transparentize(0.8, theme.colors.ink)}
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

export default function Home() {
  const guides = getGuides();
  return (
    <Container>
      <Header>
        <h3>You Do Brew</h3>
      </Header>
      {guides.map((guide) => (
        <span key={guide.slug}>
          <BrewLinkContainer to={guide.slug}>
            <Icon size="xl" type={guide.slug} />
            <InfoContainer>
              <h3>{guide.method}</h3>
              <Details>
                {formatTime(guide.totalTime)} // {guide.weight[0]}g
              </Details>
            </InfoContainer>
            <CaretIcon />
          </BrewLinkContainer>
          <Divider />
        </span>
      ))}
    </Container>
  );
}
