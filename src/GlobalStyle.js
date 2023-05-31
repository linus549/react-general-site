import { createGlobalStyle, css } from "styled-components";
import RobotoWoff2 from "assets/fonts/roboto-v27-latin-regular.woff2";

const GlobalStyle = createGlobalStyle(
  ({ theme }) => css`
    @font-face {
      font-family: "Roboto";
      src: url(${RobotoWoff2}) format("woff2");
    }

    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    * {
      margin: 0;
      padding: 0;
      overflow-wrap: break-word;
    }

    html {
      --header-height: 3.3rem;
      --font-size-sm: 1rem;
      --font-size-md: 1.1rem;
      --font-size-lg: 1.25rem;
      --font-size-xl: 1.5rem;
      --border-radius: 0.25rem;
      --divider-width: 1px;
      --focus-outline-width: 3px;
      --focus-outline-offset: 2px;
      --spacing-xs: 0.25rem;
      --spacing-sm: 0.5rem;
      --spacing-md: 1rem;
      --spacing-lg: 1.5rem;
      --spacing-xl: 2rem;
      --spacing-xxl: 4rem;
    }

    body {
      font-family: "Roboto", sans-serif;
      font-size: 1rem;
      line-height: 1.5;
      color-scheme: ${theme.colorScheme};
      color: ${theme.text};
      background-color: ${theme.background};
    }

    input,
    button,
    select,
    textarea,
    optgroup {
      font: inherit;
    }

    button {
      line-height: normal;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      line-height: normal;
      margin-bottom: 0.5rem;
    }

    p {
      color: ${theme.textAlt};
      margin-bottom: 1rem;
    }

    ul,
    ol {
      list-style: none;
    }

    img,
    picture,
    video,
    canvas,
    svg {
      display: block;
      max-width: 100%;
      height: auto;
    }

    svg {
      overflow: visible;
    }

    [hidden] {
      display: none !important;
    }

    button:not(:disabled),
    [role="button"]:not(:disabled) {
      cursor: pointer;
    }

    img {
      ${theme.name === "dark" && "filter: brightness(0.8) contrast(1.2);"}
    }

    h1 {
      margin-bottom: var(--spacing-xl);
    }

    h2,
    h3 {
      scroll-margin-top: 0.5rem;
    }

    a {
      color: ${theme.primary};
    }

    a:hover,
    a:active {
      color: ${theme.primaryAlt};
    }

    /* fallback if :focus-visible is not supported */
    *:focus {
      outline: var(--focus-outline-width) solid ${theme.primary};
      outline-offset: var(--focus-outline-offset);
    }

    /* if :focus-visible is supported */
    *:focus:not(:focus-visible) {
      outline: none;
    }

    *:focus-visible {
      outline: var(--focus-outline-width) solid ${theme.primary};
      outline-offset: var(--focus-outline-offset);
    }

    ::selection {
      color: ${theme.primaryText};
      background-color: ${theme.primary};
    }
  `
);

export default GlobalStyle;
