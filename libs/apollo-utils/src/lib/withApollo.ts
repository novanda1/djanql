import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { withApollo } from 'next-apollo';
import { PostWCursor } from '@djanql-spaces/apollo-graphql';

const apolloClient = new ApolloClient({
  ssrMode: typeof window === 'undefined',
  link: new HttpLink({
    uri: 'http://localhost:9090/graphql/',
    credentials: 'same-origin',
  }),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          posts: {
            keyArgs: [],
            merge(existing: PostWCursor, incoming: PostWCursor) {
              if (existing)
                return {
                  ...incoming,
                  result: [...existing.result, ...incoming.result],
                };
              else return incoming;
            },
          },
        },
      },
    },
  }),
});

export default withApollo(apolloClient);
