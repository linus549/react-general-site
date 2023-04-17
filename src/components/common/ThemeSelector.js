import capitalize from "lodash/capitalize";
import styled from "styled-components";
import themes from "themes";
import { ReactComponent as Icon } from "assets/icons/palette.svg";

function ThemeSelector({ value, onChange }) {
  return (
    <StyledThemeSelector>
      <ThemeIcon />

      <Select value={value} aria-label="Theme" onChange={onChange}>
        {themeList}
      </Select>
    </StyledThemeSelector>
  );
}

const themeList = Object.keys(themes).map((name) => (
  <option key={name} value={name}>
    {capitalize(name)}
  </option>
));

const StyledThemeSelector = styled.div`
  display: flex;
  align-items: center;
`;

const Select = styled.select`
  width: 10rem;
  border: none;
`;

const ThemeIcon = styled(Icon)`
  width: 1.5rem;
  margin-right: var(--spacing-sm);
`;

export default ThemeSelector;
