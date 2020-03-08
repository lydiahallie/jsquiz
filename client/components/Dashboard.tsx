import styled from "styled-components";
import Link from "next/link";

import Button from "./buttons/Button";
import { DashboardNav as NavBar } from "./NavBar";

import { GridItemProps, DashboardProps, Question } from "./types";
import { getStyles } from "../utils/getStyles";
import { useQuestionStatus } from "../utils/useLocalStorage";

const GridItem: React.FC<GridItemProps> = ({ question }) => {
  const status: string = useQuestionStatus(question.id);
  return <StyledButton status={status}>{question.id}</StyledButton>;
};

const Dashboard: React.FC<DashboardProps> = ({ data }) => (
  <>
    <NavBar />
    <StyledDashboardGrid>
      {data?.questions?.map((question: Question) => (
        <Link href={`question/${question.id}`} key={question.id}>
          <a>
            <GridItem question={question} />
          </a>
        </Link>
      ))}
    </StyledDashboardGrid>
  </>
);

export default Dashboard;

const StyledDashboardGrid = styled.div`
  display: flex;
  flex-direction: column;

  ${({ theme }) => getStyles([theme.dim.dashboard.column])};
`;

const StyledButton = styled<any>(Button)`
  ${({ theme, status }) => `
    ${getStyles([theme.dim.dashboard.button])};
    background: ${getBackground(status)};
   
    &:hover {
      background: linear-gradient(to right, #00b4db, #0083b0);
    }
  `}
`;

const getBackground = status =>
  [
    "linear-gradient(to right, #56ab2f, #a8e063)",
    "linear-gradient(to right, #ff512f, #dd2476)"
  ][["correct", "incorrect"].indexOf(status)];
