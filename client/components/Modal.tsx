import Markdown from "markdown-to-jsx";
import { useContext } from "react";
import Link from "next/link";
import styled, { keyframes } from "styled-components";
import { useSpring, animated, config } from "react-spring";
import { QuestionContext } from "./Question";
import Button from "./buttons/Button";
import { getStyles } from "../utils/getStyles";

export const Modal = () => {
  const { state, question } = useContext(QuestionContext);
  const correctAnswer = question?.options.find(x => x.correct);

  const style = useSpring({
    delay: 700,
    config: config.gentle,
    from: { transform: `scale(0)` },
    to: {
      transform: state.hasAnswered ? `scale(1)` : `scale(0)`
    }
  });

  return (
    <StyledModal style={style}>
      <Answer>{correctAnswer.text || ""}</Answer>
      <Explanation>{question.explanation}</Explanation>
      <Link href={`/question/${parseInt(question.id) + 1}`}>
        <StyledButton>Next Question</StyledButton>
      </Link>
    </StyledModal>
  );
};

const StyledModal = styled(animated.div)`
  ${({ theme }) => `
    ${getStyles([theme.dim.modal.wrapper, theme.colors.modal.wrapper])};

    display: flex;
    align-items: center;
    flex-direction: column;
`}
`;

const Answer = styled(Markdown)`
  ${({ theme }) => `
     ${getStyles([
       theme.dim.button,
       theme.fonts.button,
       theme.colors.button,
       theme.dim.modal.answer,
       theme.colors.modal.main
     ])};

     display: flex;
     justify-content: center;
     align-items: center;
     background: linear-gradient(to right, #56ab2f, #a8e063);

      code {
        margin: 0 0.5rem;
      }
  `}
`;

const Explanation = styled(Markdown)`
  ${({ theme }) => `
    ${getStyles([
      theme.fonts.modal.main,
      theme.fonts.modal.explanation,
      theme.colors.modal.main,
      theme.dim.modal.explanation
    ])};
  `}

  pre {
    overflow-x: scroll;
  }
`;

const StyledButton = styled(Button)`
  ${({ theme }) => `
    ${getStyles([theme.dim.modal.button])};
  `}

  &:hover {
    background: linear-gradient(to right, #00b4db, #0083b0);
  }
`;
