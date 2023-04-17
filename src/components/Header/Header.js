import styled, { css } from "styled-components";
import { breakpoints } from "config";
import MenuButton from "components/Header/MenuButton";
import Search from "components/common/Search";
import ThemeSelector from "components/common/ThemeSelector";

function Header({
  isSidebarOpen,
  menuButtonRef,
  theme,
  onThemeChange,
  onMenuButtonClick,
}) {
  return (
    <StyledHeader>
      <Container>
        <MenuButton
          ref={menuButtonRef}
          isSidebarOpen={isSidebarOpen}
          onClick={onMenuButtonClick}
        />

        <Brand>General site</Brand>
      </Container>

      <ResponsiveHeaderItem>
        <Search />
      </ResponsiveHeaderItem>

      <ResponsiveHeaderItem>
        <ThemeSelector value={theme} onChange={onThemeChange} />
      </ResponsiveHeaderItem>
    </StyledHeader>
  );
}

const StyledHeader = styled.header(
  ({ theme }) => css`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: ${theme.foreground};
    border-bottom: var(--divider-width) solid ${theme.divider};
    padding: var(--spacing-sm);

    & > *:not(:last-child) {
      margin-right: var(--spacing-lg);
    }

    & > *:first-child {
      margin-right: auto;
    }

    @media (min-width: ${breakpoints.MEDIUM}) {
      padding: var(--spacing-sm) var(--spacing-md);
    }

    @media (min-width: ${breakpoints.LARGE}) {
      padding: var(--spacing-sm) var(--spacing-lg);
    }
  `
);

const Container = styled.div`
  display: flex;
`;

const Brand = styled.div`
  font-size: var(--font-size-xl);
  font-weight: bold;
`;

const ResponsiveHeaderItem = styled.div`
  @media (max-width: ${breakpoints.MEDIUM_SUB}) {
    display: none;
  }
`;

export default Header;
