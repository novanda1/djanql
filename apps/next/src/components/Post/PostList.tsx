import React from 'react';
import { usePostsQuery } from '@djanql-spaces/apollo-graphql';
import { SinglePostList } from './SinglePostList';

export const PostList: React.FC = () => {
  const { data, loading, fetchMore } = usePostsQuery({
    variables: {
      postsLimit: 3,
    },
  });

  return (
    <div className="mt-6 grid gap-12 border-t-2 border-gray-100 py-8">
      {loading ? 'loading...' : ''}
      {data?.posts.result.map((post) => (
        <SinglePostList key={post.id} data={post} />
      ))}

      {data?.posts.hasNext && (
        <>
          <button
            onClick={() => {
              fetchMore({
                variables: {
                  after: data?.posts.nextCursor,
                },
              });
            }}
          >
            Load More
          </button>
        </>
      )}
    </div>
  );
};
