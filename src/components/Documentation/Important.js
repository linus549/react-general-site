import styled, { css } from "styled-components";
import { ReactComponent as Icon } from "assets/icons/exclamation-circle.svg";

function Important({ children }) {
  return (
    <StyledImportant>
      <IconWrapper>
        <Icon />
      </IconWrapper>

      <Text>
        <strong>Important: </strong>
        {children}
      </Text>
    </StyledImportant>
  );
}

const StyledImportant = styled.div(
  ({ theme }) => css`
    display: flex;
    background-color: ${theme.warning};
    border-left: 0.5rem solid ${theme.warningAlt};
    border-radius: var(--border-radius);
    margin-bottom: 1rem;
    padding: var(--spacing-md);
  `
);

const Text = styled.p(
  ({ theme }) => css`
    color: ${theme.warningText};
    margin-bottom: 0;
  `
);

const IconWrapper = styled.span(
  ({ theme }) => css`
    flex-shrink: 0;
    width: 1.25rem;
    color: ${theme.warningAlt};
    margin-top: var(--spacing-xs);
    margin-right: var(--spacing-md);
  `
);

export default Important;
