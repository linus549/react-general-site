import styled, { css } from "styled-components";

const Grid = styled.div(
  ({ $columns = 1 }) => css`
    /* responsive columns requires --Grid-max-width */
    --max-width: var(--Grid-max-width, 100%);
    --column-count: ${$columns};
    --gap-count: calc(var(--column-count) - 1);
    --gap: var(--spacing-md);
    --item-min-width: ${$columns > 1
      ? css`calc(
      var(--max-width) / var(--column-count) -
        (var(--gap) / var(--column-count)) * var(--gap-count)
    )`
      : "auto"};
    display: grid;
    grid-template-columns: repeat(
      auto-fill,
      minmax(min(var(--item-min-width), 100%), 1fr)
    );
    gap: var(--gap);
  `
);

export default Grid;
