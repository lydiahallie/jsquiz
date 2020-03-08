import styled from "styled-components";
import { getStyles } from "../../utils/getStyles";

const Button: React.FC = props => (
  <StyledButton {...props}>{props.children}</StyledButton>
);

export default Button;

export const StyledButton = styled.button`
  ${({ theme }) => `
    ${getStyles([theme.fonts.button, theme.colors.button, theme.dim.button])};

    z-index: 1;
    position: relative;
    transition: 0.3s all ease-in-out;
    cursor: pointer;

    p {
      margin: 0;
    }
    
    code {
      font-family: ${theme.fonts.code.fontFamily};
    }
  `}
`;
