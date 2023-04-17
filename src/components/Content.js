import { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { breakpoints } from "config";

function Content({ children }) {
  const elementRef = useRef(null);
  const { pathname, hash } = useLocation();

  useEffect(
    function scrollToTop() {
      if (hash === "") {
        elementRef.current.scroll(0, 0);
      }
    },
    [pathname, hash]
  );

  return (
    <StyledContent ref={elementRef}>
      <Container>{children}</Container>
    </StyledContent>
  );
}

const StyledContent = styled.main`
  display: flex;
  flex-grow: 1;
  overflow: auto scroll;

  @media (prefers-reduced-motion: no-preference) {
    scroll-behavior: smooth;
  }
`;

const Container = styled.div`
  /* used by <Grid> children */
  --Grid-max-width: calc(${breakpoints.MEDIUM} - var(--spacing-sm) * 2);
  width: 100%;
  max-width: ${breakpoints.MEDIUM};
  margin: auto;
  padding: var(--spacing-lg) var(--spacing-sm);

  @media (min-width: ${breakpoints.SMALL}) {
    --Grid-max-width: calc(${breakpoints.MEDIUM} - var(--spacing-lg) * 2);
    padding: var(--spacing-lg);
  }
`;

export default Content;
