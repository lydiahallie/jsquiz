import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";

import { withApollo } from "../lib/apollo";

const MyApp = ({ Component, pageProps, apolloClient }) => {
  return (
    <>
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
};

export default withApollo(MyApp);
