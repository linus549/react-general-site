import styled from "styled-components";

const IconButton = styled.button.attrs((props) => ({
  type: props.type || "button",
}))`
  display: inline-flex;
  align-items: center;
  background-color: inherit;
  color: inherit;
  border: none;

  &:hover:not(:disabled),
  &:active:not(:disabled) {
    color: ${({ theme }) => theme.primary};
  }
`;

export default IconButton;
