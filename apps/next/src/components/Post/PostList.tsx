import React from 'react';
import { usePostsQuery } from '../../generated/graphql';
import { SinglePostList } from './SinglePostList';

export const PostList: React.FC = () => {
  const { data, loading } = usePostsQuery();

  return (
    <div className="mt-6 grid gap-12 border-t-2 border-gray-100 py-8">
      {loading ? 'loading...' : ''}
      {data?.posts.map((post) => (
        <SinglePostList key={post.id} data={post} />
      ))}
    </div>
  );
};
