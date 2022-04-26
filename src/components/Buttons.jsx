import styled, { css } from 'styled-components';
import { shade, tint } from 'polished';
import { Link } from 'react-router-dom';
import { Icon } from './Icon/Icon';

const baseButtonStyles = css`
  // eslint-disable-next-line
  all: unset;
  align-items: center;
  aspect-ratio: ${({ children }) => !children && '1 / 1'};
  display: flex;
  flex-direction: row;
  font-weight: 700;
  justify-content: center;
  width: ${({ fullWidth }) => fullWidth && '100%'};
`;

const primaryButtonStyles = css`
  background-color: ${({ theme }) => theme.colors.ink};
  border: 2px solid ${({ theme }) => theme.colors.ink};
  color: ${({ theme }) => theme.colors.paper};
  &:hover {
    background-color: ${({ theme }) => tint(0.15, theme.colors.ink)};
  }

  & > svg {
    color: ${({ theme }) => theme.colors.paper};
  }
`;

const secondaryButtonStyles = css`
  background-color: ${({ theme }) => theme.colors.paper};
  border: 2px solid ${({ theme }) => theme.colors.ink};
  color: ${({ theme }) => theme.colors.ink};
  &:hover {
    background-color: ${({ theme }) => shade(0.15, theme.colors.paper)};
  }

  & > svg {
    color: ${({ theme }) => theme.colors.ink};
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
      case 'primary':
        return primaryButtonStyles;
      case 'secondary':
        return secondaryButtonStyles;
      case 'tertiary':
        return tertiaryButtonStyles;
      default:
        return primaryButtonStyles;
    }
  }}
  ${({ size }) => {
    switch (size) {
      case 'large':
        return largeButtonStyles;
      case 'small':
        return smallButtonStyles;
      default:
        return largeButtonStyles;
    }
  }}
`;

const StyledLink = styled(Link)`
  ${baseButtonStyles}
  ${({ variant }) => {
    switch (variant) {
      case 'primary':
        return primaryButtonStyles;
      case 'secondary':
        return secondaryButtonStyles;
      case 'tertiary':
        return tertiaryButtonStyles;
      default:
        return primaryButtonStyles;
    }
  }}
  ${({ size }) => {
    switch (size) {
      case 'large':
        return largeButtonStyles;
      case 'small':
        return smallButtonStyles;
      default:
        return largeButtonStyles;
    }
  }}
`;

export const Button = ({ icon, size, variant, children, onClick, fullWidth }) => {
  const iconSize = () => {
    switch (size) {
      case 'large':
        return 'lg';
      case 'small':
        return 'md';
    }
  };
  return (
    <StyledButton fullWidth={fullWidth} onClick={onClick} size={size} variant={variant}>
      {icon && <Icon size={iconSize()} type={icon} />}
      {children}
    </StyledButton>
  );
};

export var ButtonLink = ({ icon, size, variant, children, to, fullWidth }) => {
  const iconSize = () => {
    switch (size) {
      case 'large':
        return 'lg';
      case 'small':
        return 'md';
    }
  };
  return (
    <StyledLink fullWidth={fullWidth} size={size} to={to} variant={variant}>
      {icon && <Icon size={iconSize()} type={icon} />}
      {children}
    </StyledLink>
  );
};

Button.defaultProps = {
  size: 'large',
  variant: 'primary',
};

ButtonLink.defaultProps = {
  size: 'large',
  variant: 'primary',
};
