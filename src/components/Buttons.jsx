import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const ButtonStyles = css`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  background: ${({ theme }) => theme.colors.ink};
  color: ${({ theme }) => theme.colors.paper};
  width: 100%;
  cursor: pointer;
  font-weight: 700;
  font-size: 24px;
  &:hover {
    background: #3b3b3b;
  }
`;

const StyledButton = styled.button`
  ${ButtonStyles}
`;

const StyledLink = styled(Link)`
  ${ButtonStyles}
`;

export function ButtonLink({ to, children }) {
  return <StyledLink to={to}>{children}</StyledLink>;
}

export function Button({ onClick, children }) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}
