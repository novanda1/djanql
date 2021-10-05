import { PostList } from '../components/Post/PostList';
import withApollo from '../lib/withApollo';
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
