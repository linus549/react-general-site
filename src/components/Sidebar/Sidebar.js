import { useEffect } from "react";
import styled, { css } from "styled-components";
import { breakpoints } from "config";
import Search from "components/common/Search";
import ThemeSelector from "components/common/ThemeSelector";
import Navigation from "components/Sidebar/Navigation";

function Sidebar({ open, lastSidebarItemRef, theme, onThemeChange, onClose }) {
  useEffect(
    function manageEventListeners() {
      if (open) {
        window.addEventListener("resize", onClose);
        document.addEventListener("keydown", handleDocumentKeyDown);
      } else {
        window.removeEventListener("resize", onClose);
        document.removeEventListener("keydown", handleDocumentKeyDown);
      }

      function handleDocumentKeyDown(e) {
        if (e.key === "Escape") {
          onClose();
        }
      }

      return () => {
        window.removeEventListener("resize", onClose);
        document.removeEventListener("keydown", handleDocumentKeyDown);
      };
    },
    [open, onClose]
  );

  function handleNavigationClick() {
    if (open) {
      onClose();
    }
  }

  return (
    <StyledSidebar>
      <Backdrop $show={open} onClick={onClose} />

      <Panel $show={open}>
        <ResponsiveSidebarItem>
          <Search />
        </ResponsiveSidebarItem>

        <ResponsiveSidebarItem>
          <ThemeSelector value={theme} onChange={onThemeChange} />
        </ResponsiveSidebarItem>

        <Navigation
          lastSidebarItemRef={lastSidebarItemRef}
          onClick={handleNavigationClick}
        />
      </Panel>
    </StyledSidebar>
  );
}

const StyledSidebar = styled.div`
  position: relative;
  z-index: 100;
`;

const Backdrop = styled.div(
  ({ $show }) => css`
    visibility: hidden;
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: #000;
    opacity: 0;

    @media (max-width: ${breakpoints.LARGE_SUB}) {
      transition: visibility 0.2s ease-in, opacity 0.2s ease-in;

      ${$show &&
      css`
        visibility: visible;
        opacity: 0.5;
        transition: visibility 0.3s ease-out, opacity 0.3s ease-out;
      `}
    }

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  `
);

const Panel = styled.div(
  ({ theme, $show }) => css`
    flex-shrink: 0;
    position: fixed;
    width: 100%;
    height: calc(100vh - var(--header-height));
    overflow-y: auto;
    padding: var(--spacing-lg) var(--spacing-xl);
    padding-left: 0;
    background-color: ${theme.background};
    border-right: var(--divider-width) solid ${theme.divider};
    outline: 0;

    @media (min-width: ${breakpoints.MEDIUM}) {
      width: 50%;
    }

    @media (max-width: ${breakpoints.LARGE_SUB}) {
      visibility: hidden;
      transform: translateX(-100%);
      transition: visibility 0.2s ease-in, transform 0.2s ease-in;

      ${$show &&
      css`
        visibility: visible;
        transform: translateX(0);
        transition: visibility 0.3s ease-out, transform 0.3s ease-out;
      `};
    }

    @media (min-width: ${breakpoints.LARGE}) {
      position: static;
      width: auto;
    }

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  `
);

const ResponsiveSidebarItem = styled.div`
  margin-left: var(--spacing-lg);
  margin-bottom: var(--spacing-xl);

  @media (min-width: ${breakpoints.MEDIUM}) {
    display: none;
  }
`;

export default Sidebar;
