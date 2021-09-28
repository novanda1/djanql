import { useHelloQuery } from '../generated/graphql';
import withApollo from '../lib/withApollo';

export function Index() {
  const { data } = useHelloQuery();
  return <div>{data?.hello}</div>;
}

export default withApollo()(Index);
