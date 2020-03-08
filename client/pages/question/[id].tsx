import { useRouter } from "next/router";

import Question from "../../components/Question";
import { utils } from "../../graphql";

export default () => {
  const { id }: { id?: string } = useRouter().query;
  const question = utils.getQuestion(id);

  return question ? <Question question={question} /> : <div />;
};
