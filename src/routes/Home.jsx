import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { transparentize } from 'polished';
import { useState, useEffect } from 'react';
import { gql, request } from 'graphql-request';
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

const Home = () => {
  const guides = getGuides();
  const [methods, setMethods] = useState(null);

  useEffect(() => {
    const query = gql`
      {
        brews {
          title
          weight
          totalTime
          slug
        }
      }
    `;
    const fetchMethods = async () => {
      const fetchedMethods = await request(
        'https://api-us-east-1.graphcms.com/v2/cl2f5a9qd0r2l01xmdo8ncy7p/master',
        query,
      );

      setMethods(fetchedMethods);
    };
    fetchMethods();
  }, []);
  return (
    <Container>
      <Header>
        <h3>You Do Brew</h3>
      </Header>
      {methods &&
        methods.brews.map((method) => (
          <span key={method.slug}>
            <BrewLinkContainer to={method.slug}>
              <Icon size="xl" type={method.slug} />
              <InfoContainer>
                <h3>{method.title}</h3>
                <Details>
                  {formatTime(method.totalTime)} / {method.weight[0]}g
                </Details>
              </InfoContainer>
              <CaretIcon />
            </BrewLinkContainer>
            <Divider />
          </span>
        ))}
      {guides.map((guide) => (
        <span key={guide.slug}>
          <BrewLinkContainer to={guide.slug}>
            <Icon size="xl" type={guide.slug} />
            <InfoContainer>
              <h3>{guide.method}</h3>
              <Details>
                {formatTime(guide.totalTime)} / {guide.weight[0]}g
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
