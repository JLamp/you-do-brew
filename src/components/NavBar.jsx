import styled, { keyframes, css } from 'styled-components';
import { Link, useOutletContext, useParams } from 'react-router-dom';
import { transparentize } from 'polished';
import { MenuButton as UnStyledMenuButton, MenuItem, Menu as MenuInner } from '@szhsin/react-menu';
import { menuSelector, menuItemSelector } from '@szhsin/react-menu/style-utils';
import { Icon } from './Icon/Icon';
import '@szhsin/react-menu/dist/core.css';

const TRANSITION = css`
  transition: all 0.25s;
`;

const Container = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.line};
  display: flex;
  justify-content: space-between;
  padding-bottom: 8px;
`;

const HomeButton = styled(Link)`
  all: unset;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.ink};
  padding: 8px;
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
  border-radius: 4px;
  cursor: default;
  display: flex;
  font-size: 16px;
  font-weight: 700;
  gap: 8px;
  line-height: 1;
  margin: 0;
  padding: 8px;
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
  background-color: ${({ theme }) => transparentize(0.8, theme.colors.line)};
  height: 1px;
`;

const MenuLink = styled(Link)`
  align-items: center;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.paper};
  cursor: pointer;
  display: flex;
  font-size: 16px;
  font-weight: 700;
  gap: 8px;
  padding: 8px;
  ${TRANSITION};
  &:hover {
    background: ${({ theme }) => transparentize(0.8, theme.colors.paper)};
  }
`;

const MenuButtonComponent = ({ currentMethod }) => {
  const methods = useOutletContext();

  return (
    <Menu
      menuButton={
        <MenuButton>
          <Icon size="md" type={currentMethod.slug} />
          {currentMethod.title}
        </MenuButton>
      }
      transition={true}
    >
      <MenuItem>
        <MenuLink to="/">
          <Icon size="md" type="home" />
          <span>Home</span>
        </MenuLink>
      </MenuItem>

      <Divider />

      {methods.map((method) => (
        <MenuItem key={method.slug}>
          <MenuLink to={`/${method.slug}`}>
            <Icon size="md" type={method.slug} />
            <span>{method.title}</span>
          </MenuLink>
        </MenuItem>
      ))}
    </Menu>
  );
};

const NavBar = ({ currentMethod }) => (
  <Container>
    <MenuButtonComponent currentMethod={currentMethod} />
    <HomeButton to="/">
      <Icon size="md" type="home" />
    </HomeButton>
  </Container>
);

export default NavBar;
