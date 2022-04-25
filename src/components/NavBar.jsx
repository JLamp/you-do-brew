import styled, { keyframes, css } from "styled-components";
import { getCurrentGuide } from "../utils";
import { Icon } from "./Icon/Icon";
import { Link } from "react-router-dom";
import { transparentize } from "polished";
import {
  MenuButton as UnStyledMenuButton,
  MenuItem,
  Menu as MenuInner,
} from "@szhsin/react-menu";
import { menuSelector, menuItemSelector } from "@szhsin/react-menu/style-utils";
import "@szhsin/react-menu/dist/core.css";
import { getGuides } from "../data";

const TRANSITION = css`
  transition: all 0.25s;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 8px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.line};
`;

const HomeButton = styled(Link)`
  all: unset;
  padding: 8px;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.ink};
  ${TRANSITION};
  &:hover {
    background-color: ${({ theme }) => transparentize(0.8, theme.colors.ink)};
  }
  &:active {
    background-color: ${({ theme }) => transparentize(0.6, theme.colors.ink)};
  }
`;

const MenuButton = styled(UnStyledMenuButton)`
  all: unset;
  display: flex;
  gap: 8px;
  padding: 8px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 700;
  line-height: 1;
  margin: 0;
  cursor: default;
  ${TRANSITION};
  &:hover {
    background-color: ${({ theme }) => transparentize(0.8, theme.colors.ink)};
  }
  &:active {
    background-color: ${({ theme }) => transparentize(0.6, theme.colors.ink)};
  }
`;

const menuShow = keyframes`
  from {
    opacity: 0;
  }
`;
const menuHide = keyframes`
  to {
    opacity: 0;
  }
`;

const Menu = styled(MenuInner)`
  ${menuSelector.name} {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 8px;
    border-radius: 4px;
    border: none;
    transform: translateY(8px);
    background: ${({ theme }) => theme.colors.ink};
  }

  ${menuSelector.stateOpening} {
    animation: ${menuShow} 0.15s ease-out;
  }

  // NOTE: animation-fill-mode: forwards is required to
  // prevent flickering with React 18 createRoot()
  ${menuSelector.stateClosing} {
    animation: ${menuHide} 0.2s ease-out forwards;
  }

  ${menuItemSelector.name} {
    all: unset;
    display: flex;
    & > * {
      width: 100%;
    }
  }
`;

const Divider = styled.div`
  height: 1px;
  background-color: ${({ theme }) => transparentize(0.8, theme.colors.line)};
`;

const MenuLink = styled(Link)`
  color: ${({ theme }) => theme.colors.paper};
  font-weight: 700;
  font-size: 16px;
  padding: 8px;
  cursor: pointer;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 8px;
  ${TRANSITION};
  &:hover {
    background: ${({ theme }) => transparentize(0.8, theme.colors.paper)};
  }
`;

function MenuButtonComponent() {
  let currentGuide = getCurrentGuide();
  let guides = getGuides();

  return (
    <Menu
      transition
      menuButton={
        <MenuButton>
          <Icon type={currentGuide.slug} size="md" />
          {currentGuide.method}
        </MenuButton>
      }
    >
      <MenuItem>
        <MenuLink to="/">
          <Icon type="home" size="md" />
          <span>Home</span>
        </MenuLink>
      </MenuItem>

      <Divider />

      {guides.map((guide) => (
        <MenuItem key={guide.slug}>
          <MenuLink to={"/" + guide.slug}>
            <Icon type={guide.slug} size="md" />
            <span>{guide.method}</span>
          </MenuLink>
        </MenuItem>
      ))}
    </Menu>
  );
}

export default function NavBar() {
  return (
    <Container>
      <MenuButtonComponent />
      <HomeButton to="/">
        <Icon type="home" size="md" />
      </HomeButton>
    </Container>
  );
}
