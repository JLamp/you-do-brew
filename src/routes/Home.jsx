import { Link } from "react-router-dom";
import { getGuides } from "../data";
import { Icon } from "../components/Icon/Icon";
import styled from "styled-components";
import { transparentize } from "polished";
import { formatTime } from "../utils";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  // gap: 8px;
`;

const Header = styled.div`
  padding-bottom: 8px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.line};
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
  type: "caret-right",
  size: "md",
})`
  color: ${({ theme }) => theme.colors.line};
`;

const Details = styled.span`
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 14px;
  font-weight: 700;
`;

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.line};
`;

export default function Home() {
  let guides = getGuides();
  return (
    <Container>
      <Header>
        <h3>You Do Brew</h3>
      </Header>
      {guides.map((guide) => (
        <span key={guide.slug}>
          <BrewLinkContainer to={guide.slug}>
            <Icon type={guide.slug} size="xl" />
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
