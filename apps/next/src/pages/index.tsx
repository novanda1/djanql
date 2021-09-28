import { gql, useQuery } from '@apollo/client';
import withApollo from '../lib/withApollo';

export function Index() {
  const hello = gql`
    {
      hello
    }
  `;

  const { data } = useQuery(hello);
  return <div>{data?.hello}</div>;
}

export default withApollo()(Index);
