import styled from "styled-components";
import IconButton from "components/styled/IconButton";
import { ReactComponent as Icon } from "assets/icons/search.svg";

function Search() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <StyledSearch role="search" onSubmit={handleSubmit}>
      <IconButton type="submit" aria-label="Search">
        <SearchIcon />
      </IconButton>

      <Input type="search" placeholder="Search" required />
    </StyledSearch>
  );
}

const StyledSearch = styled.form`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  background-color: inherit;
  color: inherit;
  border: none;
  border-bottom: var(--divider-width) solid currentColor;
  width: 10rem;
  padding: 0;

  &::placeholder {
    color: ${({ theme }) => theme.textAlt};
  }
`;

const SearchIcon = styled(Icon)`
  width: 1.5rem;
  margin-right: var(--spacing-sm);
`;

export default Search;
