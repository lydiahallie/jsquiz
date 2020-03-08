import { catchErrors } from "../../utils/error";
import QUESTIONS from "../../data";

export const Query = {
  question: catchErrors(async (_, { id }) => QUESTIONS[id]),
  questions: catchErrors(async () => QUESTIONS)
};
