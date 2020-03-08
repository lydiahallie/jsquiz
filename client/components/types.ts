export interface Question {
  id: string;
  title: string;
  code: string;
  options: Option[];
}

export interface QuestionData {
  question: Question;
}

export interface QuestionsData {
  questions: Question[];
}

export interface Option {
  correct: boolean;
  text: string;
}

export interface GridItemProps {
  readonly question: Question;
}

export interface DashboardProps {
  data: QuestionsData;
}
