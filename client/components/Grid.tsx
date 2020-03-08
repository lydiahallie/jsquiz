import styled from "styled-components";

import { GridProps } from "./types";

export default function Grid({ children, dimensions }: GridProps): JSX.Element {
  return <StyledGrid dimensions={dimensions}>{children}</StyledGrid>;
}

const StyledGrid = styled.div<GridProps>`
  display: grid;
  justify-items: stretch;
  ${({ dimensions }) => `
    grid-template-columns: ${dimensions.columnWidth};
    grid-template-rows:  ${dimensions.rowWidth};
    grid-column-gap: ${dimensions.columnGap};
    grid-row-gap: ${dimensions.rowGap};
  `};
`;
