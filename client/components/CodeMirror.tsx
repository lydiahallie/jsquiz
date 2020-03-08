import { useContext } from "react";
import { UnControlled } from "react-codemirror2";
import styled from "styled-components";

import { getStyles } from "../utils/getStyles";
import { QuestionContext } from "./Question";
import { QuestionData } from "./types";

if (typeof window !== "undefined" && typeof window.navigator !== "undefined") {
  require("codemirror/mode/javascript/javascript");
}

const CodeMirror: React.FC = props => {
  const { question }: QuestionData = useContext(QuestionContext);

  return (
    question?.code && (
      <StyledCodeMirror
        {...props}
        value={question?.code}
        options={{
          mode: "javascript",
          theme: "material",
          lineNumbers: false,
          readOnly: true
        }}
      />
    )
  );
};

export default CodeMirror;

const StyledCodeMirror = styled(UnControlled)`
  ${({ theme }) => `
  ${getStyles([theme.fonts.code, theme.colors.code, theme.dim.code])};
    .CodeMirror {
      ${getStyles([theme.colors.code])};
      direction: ltr;
      height: auto;
      width: auto;
    }
    
    .CodeMirror-line {
      ${getStyles([theme.fonts.code])};
    }
   `}
`;
