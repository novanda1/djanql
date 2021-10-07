import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import { withApollo } from 'next-apollo';
import { PostWCursor } from '@djanql-spaces/apollo-graphql';
import { IncomingHttpHeaders } from 'http';

const createApolloClient = (headers: IncomingHttpHeaders | null = null) => {
  // isomorphic fetch for passing the cookies along with each GraphQL request
  const enhancedFetch = (url: RequestInfo, init: RequestInit) => {
    return fetch(url, {
      ...init,
      headers: {
        ...init.headers,
        'Access-Control-Allow-Origin': '*',
        // here we pass the cookie along for each request
        Cookie: headers?.cookie ?? '',
      },
    }).then((response) => response);
  };

  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: ApolloLink.from([
      new HttpLink({
        uri: 'http://localhost:9090/graphql/',
        credentials: 'same-origin',
        fetch: enhancedFetch,
      }),
    ]),
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
};

export default withApollo(createApolloClient());
