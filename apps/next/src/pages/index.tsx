import { PostList } from '../components/Post/PostList';
import withApollo from '../lib/withApollo';

export function Index() {
  return <PostList />;
}

export default withApollo()(Index);
