import { PostDetail } from '../components/Post/PostDetail';
import withApollo from '../lib/withApollo';

const PostDetailPage: React.FC = () => {
  return <PostDetail />;
};

export default withApollo()(PostDetailPage);
