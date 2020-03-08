import { useQuery } from "@apollo/react-hooks";

import { query } from "../graphql";
import Dashboard from "../components/Dashboard";

export default (): JSX.Element => {
  const { data } = useQuery(query.GET_QUESTIONS);

  return <Dashboard data={data} />;
};
