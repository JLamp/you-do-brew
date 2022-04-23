import styled from "styled-components";
import { getCurrentGuide } from "../utils";
import { Icon } from "./Icon/Icon";
import { Link } from "react-router-dom";
import { ButtonLink } from "./Buttons";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
`;

const StyledNavItem = styled.div`
  display: flex;
  gap: 8px;
  font-weight: 700;
  padding: 0px 16px;
`;

function NavButton({}) {
  return <div></div>;
}

export default function NavBar() {
  let guide = getCurrentGuide();
  return (
    <Container>
      <span>{guide.method}</span>
      <ButtonLink
        icon="home"
        to="/"
        variant="tertiary"
        size="small"
        styled={{ height: "100%" }}
      />
    </Container>
  );
}
