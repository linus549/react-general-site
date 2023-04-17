import { forwardRef } from "react";
import styled from "styled-components";
import { breakpoints } from "config";
import IconButton from "components/styled/IconButton";
import { ReactComponent as MenuIcon } from "assets/icons/list.svg";
import { ReactComponent as CloseIcon } from "assets/icons/x-lg.svg";

const MenuButton = forwardRef(({ isSidebarOpen, onClick }, ref) => {
  return (
    <StyledMenuButton
      ref={ref}
      aria-label={isSidebarOpen ? "Close menu" : "Open menu"}
      onClick={onClick}
    >
      <IconWrapper>{isSidebarOpen ? <CloseIcon /> : <MenuIcon />}</IconWrapper>
    </StyledMenuButton>
  );
});

const StyledMenuButton = styled(IconButton)`
  padding: 0 var(--spacing-sm);

  @media (min-width: ${breakpoints.LARGE}) {
    display: none;
  }
`;

const IconWrapper = styled.div`
  width: 1.5rem;
`;

export default MenuButton;
