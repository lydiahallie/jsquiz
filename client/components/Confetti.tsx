import useWindowSize from "react-use/lib/useWindowSize";
import { default as ReactConfetti } from "react-confetti";
import { useContext } from "react";
import { QuestionContext } from "./Question";

interface WindowDimensions {
  width: number;
  height: number;
}

const Confetti: React.FC = () => {
  const { state } = useContext(QuestionContext);
  const { width, height }: WindowDimensions = useWindowSize();

  return (
    state?.correct && (
      <ReactConfetti width={width} height={height} recycle={false} />
    )
  );
};

export default Confetti;
