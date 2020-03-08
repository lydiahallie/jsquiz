import { createContext, useReducer, useCallback, useContext } from "react";
import styled from "styled-components";
import Markdown from "markdown-to-jsx";

import Button from "./buttons/QuizButton";
import CodeMirror from "./CodeMirror";
import Confetti from "./Confetti";
import { QuestionNav as NavBar } from "./NavBar";
import { Modal } from "./Modal";

import { QuestionProps, Option } from "./types";
import { getStyles } from "../utils/getStyles";
import { updateQuestion } from "../utils/useLocalStorage";

export const QuestionContext = createContext(null);

const ButtonRow: Function = (): JSX.Element => {
  const { question } = useContext(QuestionContext);

  return (
    <StyledButtonRow>
      {question?.options.map(
        (opt: Option, i: number): JSX.Element => (
          <Button opt={opt} />
        )
      )}
    </StyledButtonRow>
  );
};

const Question: React.FC<QuestionProps> = ({ question }) => {
  const [state, setState] = useReducer((s, a) => ({ ...s, ...a }), {
    hasAnswered: false,
    answer: null,
    correct: null
  });

  const handleClick = useCallback((correct: boolean): void => {
    if (!state.hasAnswered) {
      updateQuestion(question.id, correct);
      setState({ hasAnswered: true, correct });
    }
  }, []);

  return (
    <QuestionContext.Provider value={{ state, handleClick, question }}>
      <NavBar />
      <StyledQuestion>
        <Modal />
        <Confetti />
        <StyledTitle>{question.title}</StyledTitle>
        <CodeMirror />
        <ButtonRow />
      </StyledQuestion>
    </QuestionContext.Provider>
  );
};

export default Question;

const StyledQuestion = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({ theme }) => getStyles([theme.dim.question])};
`;

const StyledButtonRow = styled.div`
  display: flex;
  flex-direction: column;
  ${({ theme }) => getStyles([theme.dim.buttonRow])};
`;

const StyledTitle = styled(Markdown)`
  ${({ theme }) =>
    getStyles([theme.dim.title, theme.fonts.title, theme.colors.title])};
`;
