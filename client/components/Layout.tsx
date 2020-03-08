import React from "react";
import styled from "styled-components";

import { LayoutProps } from "./types";

export default ({ children }: LayoutProps): JSX.Element => (
  <StyledLayout>{children}</StyledLayout>
);

const StyledLayout = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.main.background};
`;
