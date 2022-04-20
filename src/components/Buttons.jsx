import styled, { css } from "styled-components";
import { Icon } from "./Icon/Icon";
import { shade, tint } from "polished";
import { Link } from "react-router-dom";

const baseButtonStyles = css`
  all: unset;
  display: flex;
  flex-direction: row;
  font-weight: 700;
  justify-content: center;
  align-items: center;
  aspect-ratio: ${({ children }) => !children && "1 / 1"};
`;

const primaryButtonStyles = css`
  background-color: ${({ theme }) => theme.colors.ink};
  color: ${({ theme }) => theme.colors.paper};
  &:hover {
    background-color: ${({ theme }) => tint(0.15, theme.colors.ink)};
  }
`;

const secondaryButtonStyles = css`
  color: ${({ theme }) => theme.colors.ink};
  background-color: ${({ theme }) => theme.colors.paper};
  border: 1px solid ${({ theme }) => theme.colors.ink};
  &:hover {
    background-color: ${({ theme }) => shade(0.15, theme.colors.paper)};
  }
`;

const tertiaryButtonStyles = css`
  ${secondaryButtonStyles};
  border: none;
`;
const largeButtonStyles = css`
  font-size: 24px;
  gap: 16px;
  padding: 8px 16px;
`;

const smallButtonStyles = css`
  font-size: 16px;
  gap: 8px;
  padding: 4px 8px;
`;

const StyledButton = styled.button`
  ${baseButtonStyles}
  ${({ variant }) => {
    switch (variant) {
      case "primary":
        return primaryButtonStyles;
      case "secondary":
        return secondaryButtonStyles;
      case "tertiary":
        return tertiaryButtonStyles;
    }
  }}
  ${({ size }) => {
    switch (size) {
      case "large":
        return largeButtonStyles;
      case "small":
        return smallButtonStyles;
    }
  }}
`;

const StyledLink = styled(Link)`
  ${baseButtonStyles}
  ${({ variant }) => {
    switch (variant) {
      case "primary":
        return primaryButtonStyles;
      case "secondary":
        return secondaryButtonStyles;
      case "tertiary":
        return tertiaryButtonStyles;
    }
  }}
  ${({ size }) => {
    switch (size) {
      case "large":
        return largeButtonStyles;
      case "small":
        return smallButtonStyles;
    }
  }}
`;

export function Button({ icon, size, variant, children, onClick }) {
  const iconSize = () => {
    switch (size) {
      case "large":
        return "lg";
      case "small":
        return "md";
    }
  };
  return (
    <StyledButton onClick={onClick} size={size} variant={variant}>
      {icon && <Icon type={icon} size={iconSize()} />}
      {children}
    </StyledButton>
  );
}

export function ButtonLink({ icon, size, variant, children, to }) {
  const iconSize = () => {
    switch (size) {
      case "large":
        return "lg";
      case "small":
        return "md";
    }
  };
  return (
    <StyledLink to={to} size={size} variant={variant}>
      {icon && <Icon type={icon} size={iconSize()} />}
      {children}
    </StyledLink>
  );
}

Button.defaultProps = {
  size: "large",
  variant: "primary",
};

ButtonLink.defaultProps = {
  size: "large",
  variant: "primary",
};
