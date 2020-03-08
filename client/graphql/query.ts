import { gql } from "apollo-boost";

export const GET_QUESTIONS = gql`
  query Questions {
    questions {
      id
      code
      title
      options {
        text
        correct
      }
      explanation
    }
  }
`;

export const GET_QUESTION = gql`
  query Question($id: ID!) {
    question(id: $id) {
      id
      code
      title
      options {
        text
        correct
      }
      explanation
    }
  }
`;
