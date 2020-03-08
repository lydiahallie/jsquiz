import { useState, useContext } from "react";
import styled, { keyframes, css } from "styled-components";
import Markdown from "markdown-to-jsx";

import Button from "./Button";
import { QuestionContext } from "../Question";
import { getStyles } from "../../utils/getStyles";

const QuizButton: React.FC<any> = props => {
  const [active, setActive] = useState(false);
  const { state, handleClick } = useContext(QuestionContext);

  function handleAnswer() {
    if (!state.hasAnswered) {
      setActive(true);
      handleClick(props.opt.correct);
    }
  }

  return (
    <StyledQuizButton
      active={active}
      answered={state.hasAnswered}
      onClick={handleAnswer}
      {...props}
    >
      <InnerButton active={active} answered={state.hasAnswered} {...props} />
      <Markdown>{props.opt.text}</Markdown>
      {props.children}
    </StyledQuizButton>
  );
};

export default QuizButton;

const StyledQuizButton = styled(Button)`
  ${(props: any) => css`
    animation: ${() => shakeAnimation(props)}
  } 
`}
`;

export const InnerButton = styled.div<any>`
  ${({ theme, ...props }) => css`
    ${getStyles([theme.dim.innerButton])};

    display: ${props.answered ? "block" : "none"};
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;

    background: ${props.opt.correct
      ? "linear-gradient(to right, #56ab2f, #a8e063)"
      : "linear-gradient(to right, #ff512f, #dd2476)"};

    animation: ${() =>
      changeBackgroundAnimation(props as { active: boolean; opt: boolean })};
  `}
`;

const shake = keyframes`
  10%, 90% { transform: translate3d(-1px, 0, 0); }
  20%, 80% { transform: translate3d(2px, 0, 0); }
  30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
  40%, 60% { transform: translate3d(4px, 0, 0); }
`;

const changeBackground = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1 };
`;

const shakeAnimation = ({ active, opt }) =>
  active &&
  !opt.correct &&
  css`
    ${shake} 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both
  `;

const changeBackgroundAnimation = ({ active, opt }) =>
  ((active && !opt.correct) || active || opt.correct) &&
  css`
    ${changeBackground} 1.38s cubic-bezier(0.36, 0.07, 0.19, 0.97) both
  `;
