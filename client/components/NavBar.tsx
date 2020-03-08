import Link from "next/link";
import styled from "styled-components";

import Grid from "./icons/Grid";
import { getStyles } from "../utils/getStyles";

export const NavBar = () => (
  <StyledNavBar>
    <Link href="/">
      <a>
        <Grid />
      </a>
    </Link>
  </StyledNavBar>
);

const StyledNavBar = styled.div`
  ${({ theme }) => `
    ${getStyles([theme.dim.topBar, theme.colors.topBar])}
`}
`;
