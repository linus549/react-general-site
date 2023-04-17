import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const ButtonLink = styled(Link)(
  ({ theme }) => css`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    padding: var(--spacing-md) var(--spacing-xl);
    color: ${theme.primaryText};
    background-color: ${theme.primary};
    border-radius: var(--border-radius);

    &:hover,
    &:active {
      color: ${theme.primaryText};
      background-color: ${theme.primaryAlt};
    }
  `
);

export default ButtonLink;
