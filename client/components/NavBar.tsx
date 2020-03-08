import Link from "next/link";
import styled from "styled-components";

import Grid from "./icons/Grid";
import GitHub from "./icons/GitHub";
import { getStyles } from "../utils/getStyles";

export const QuestionNav = () => (
  <StyledNavBar>
    <Link href="/">
      <a>
        <Grid />
      </a>
    </Link>
  </StyledNavBar>
);

export const DashboardNav = () => (
  <StyledNavBar>
    <Link href="https://github.com/lydiahallie/jsquiz">
      <a target="_blank">
        <GitHub />
      </a>
    </Link>
  </StyledNavBar>
);

const StyledNavBar = styled.div`
  ${({ theme }) => `
    ${getStyles([theme.dim.topBar, theme.colors.topBar])}
`}
`;
