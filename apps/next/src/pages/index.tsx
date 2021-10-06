import { PostList } from '../components/Post/PostList';
import withApollo from '@djanql-spaces/apollo-utils';
import Head from 'next/head';

export function Index() {
  return (
    <>
      <Head>
        <title>Fullstackradio</title>
      </Head>
      <PostList />;
    </>
  );
}

export default withApollo()(Index);
