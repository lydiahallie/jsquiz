export interface Question {
  id: string;
  title: string;
  code: string;
  options: Option[];
}

export interface QuestionQueryResult {
  data: QuestionData;
}

export interface QuestionsQueryResult {
  data: QuestionsData;
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

export interface QuestionProps {
  question: Question;
}

export interface CodeMirrorProps {
  value: string;
}

export interface GridProps {
  children: JSX.Element | JSX.Element[];
  dimensions: Record<Dimensions, string>;
}

type Dimensions = "columnWidth" | "rowWidth" | "columnGap" | "rowGap";

export interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

export interface GridItemProps {
  readonly question: Question;
}

export interface DashboardProps {
  data: QuestionsData;
}

export interface QuestionButtonProps {
  readonly active?: boolean;
  readonly answered?: number;
  readonly onClick?: () => void;
  readonly correct?: boolean;
  readonly opt?: Option;
  props?: React.HTMLProps<HTMLDivElement>;
}
