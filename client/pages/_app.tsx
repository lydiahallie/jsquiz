import React from "react";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { ApolloProvider } from "@apollo/react-hooks";

import { withApollo } from "../lib/apollo";
import Layout from "../components/Layout";
import theme from "../styles/theme";
import GlobalStyle from "../styles/globalStyle";
import { generateMetaData } from "../utils/functions/generateMeta";
import { useBreakpoint } from "../utils/useBreakpoint";

import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";

const MyApp = ({ Component, pageProps, apolloClient }) => {
  const breakpoint = useBreakpoint();

  return (
    <>
      <Head>{generateMetaData()}</Head>
      <ApolloProvider client={apolloClient}>
        <ThemeProvider theme={theme(breakpoint)}>
          <GlobalStyle />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </ApolloProvider>
    </>
  );
};

export default withApollo(MyApp);
