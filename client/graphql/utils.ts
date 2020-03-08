import { useState, useEffect } from "react";
import { useApolloClient, useLazyQuery } from "@apollo/react-hooks";
import { GET_QUESTION, GET_QUESTIONS } from "./query";

import { Question, QuestionData, QuestionsData } from "../components/types";

export const getQuestion = (id: string) => {
  const [question, setQuestion] = useState<Question | null>(null);
  const client = useApolloClient();
  const [getQuestion] = useLazyQuery<QuestionData>(GET_QUESTION, {
    variables: { id },
    onCompleted(data) {
      setQuestion(data.question);
    }
  });

  useEffect(() => {
    try {
      const data: QuestionsData = client.readQuery({
        query: GET_QUESTIONS
      });

      setQuestion(data?.questions?.[`${parseInt(id) - 1}`]);
    } catch {
      getQuestion();
    }
  }, []);

  return question;
};
