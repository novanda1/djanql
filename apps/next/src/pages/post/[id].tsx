import { GetStaticPaths, GetStaticProps } from 'next';
import { PostDetail } from '../../components/Post/PostDetail';
import {
  PostDocument,
  PostQuery,
  PostQueryVariables,
  PostsDocument,
  PostsQuery,
} from '@djanql-spaces/apollo-graphql';
import { initializeApollo } from '@djanql-spaces/apollo-utils';
import withApollo from '@djanql-spaces/apollo-utils';

const PostDetailPage = ({ post }) => {
  return <PostDetail data={post} />;
};

const client = initializeApollo();

export const getStaticProps: GetStaticProps = async ({ params = {} }) => {
  if (!params?.id) {
    throw new Error('Parameter is invalid');
  }

  const { data } = await client.query<PostQuery>({
    query: PostDocument,
    variables: {
      id: params?.id,
    } as PostQueryVariables,
  });

  return {
    props: {
      post: data,
    },
    revalidate: 60,
  };
};
export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query<PostsQuery>({
    query: PostsDocument,
    variables: { postsLimit: 3 },
  });
  const ids = data.posts.result?.map((p) => p?.id);
  const paths = ids?.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: true,
  };
};

export default withApollo()(PostDetailPage as React.FC);
