import { NavLink, useLocation } from "react-router-dom";
import styled, { css } from "styled-components";
import TableOfContents from "components/Sidebar/TableOfContents";

function Navigation({ lastSidebarItemRef, onClick }) {
  const { pathname } = useLocation();

  return (
    <nav onClick={onClick}>
      <ul>
        <NavItem>
          <Link to="/getstarted">Get Started</Link>
        </NavItem>

        <NavItem>
          <Link to="/about">About</Link>
        </NavItem>

        <NavItem>
          <Link to="/download">Download</Link>
        </NavItem>

        <NavItem>
          <Link
            ref={pathname !== "/documentation" ? lastSidebarItemRef : undefined}
            to="/documentation"
          >
            Documentation
          </Link>
          {pathname === "/documentation" && (
            <TableOfContents lastSidebarItemRef={lastSidebarItemRef} />
          )}
        </NavItem>
      </ul>
    </nav>
  );
}

const NavItem = styled.li`
  &:not(:last-of-type) {
    margin-bottom: var(--spacing-sm);
  }
`;

const Link = styled(NavLink)(
  ({ theme }) => css`
    display: block;
    color: inherit;
    text-decoration: none;
    padding: var(--spacing-md) var(--spacing-lg);
    overflow-wrap: normal;

    &:hover,
    &:active {
      color: ${theme.primary};
    }

    &.active {
      color: ${theme.primary};
      border-left: var(--spacing-xs) solid ${theme.primary};
      padding-left: calc(var(--spacing-lg) - var(--spacing-xs));
    }
  `
);

export default Navigation;
