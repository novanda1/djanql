import { PostList } from '../components/Post/PostList';
import withApollo from '../lib/withApollo';

export function Index() {
  return (
    <div className="mt-7">
      <PostList />
    </div>
  );
}

export default withApollo()(Index);
