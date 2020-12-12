import "../styles/globals.css";
import Layout from "../components/Layout";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.API_GRAPHQL,
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Layout>
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Layout>
    </div>
  );
}

export default MyApp;
