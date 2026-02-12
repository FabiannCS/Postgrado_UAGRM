import { ApolloClient, InMemoryCache, ApolloLink, HttpLink, from } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { persistCache, LocalStorageWrapper } from "apollo3-cache-persist";

const httpLink = new HttpLink({
  uri: "https://172.21.2.20/posgrado",
  // uri: "http://localhost:8003/graphql",
});

const authLink = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem("token");
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      Authorization: token ? `JWT ${token}` : "",
    },
  }));
  return forward(operation);
});


const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      console.warn(`⚠️ [GraphQL error]: ${message}`, { locations, path });
    });
  }
  if (networkError) {
    console.error("🚫 [Network error]:", networkError);
    if ('statusCode' in networkError && networkError.statusCode === 502) {
      console.warn("❌ Servidor no disponible (Bad Gateway 502)");
    }
  }
});

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        listMatriculas: {
          merge(_, incoming) {
            return incoming;
          },
        },
        listOfertaedicions: {
          merge(_, incoming) {
            return incoming;
          },
        },
      },
    },
    // PersonaType: {
    //   keyFields: false,
    //   merge(existing, incoming) {
    //     return { ...existing, ...incoming };
    //   },
    // },
  },
});

async function setupApolloClient() {

  await persistCache({
    cache,
    storage: new LocalStorageWrapper(window.localStorage),
  });


  const client = new ApolloClient({
    link: from([errorLink, authLink, httpLink]),
    cache,
    devtools: { enabled: true },
    defaultOptions: {
      watchQuery: {
        fetchPolicy: "cache-and-network",
        nextFetchPolicy: "cache-first",
        errorPolicy: "ignore",
      },
      query: {
        fetchPolicy: "cache-first",
        errorPolicy: "all",
      },
    },
  });

  return client;
}

export default setupApolloClient;