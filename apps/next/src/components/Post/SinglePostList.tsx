import moment from 'moment';
import { Post } from '@djanql-spaces/apollo-graphql';
import Link from 'next/link';

interface ISinglePostList {
  data: Partial<Post>;
}

export const SinglePostList: React.FC<ISinglePostList> = ({ data }) => {
  const date = moment(data.created).format('MMMM d[,] YYYY');

  return (
    <div className="relative">
      <p className="text-sm leading-5 text-gray-500">
        <time dateTime="2021-1-28">{date}</time>
      </p>
      <div>
        <h2 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
          {data.id}: {data.host && data.host + ' -'} {data.title}
        </h2>
        <p className="mt-3 text-base leading-6 text-gray-500">{data.excerpt}</p>
      </div>
      <div className="mt-3">
        <Link href={`/post/${data.id}`}>
          <a className="text-base leading-6 font-semibold text-teal-600 hover:text-teal-700 focus:outline-none focus:underline">
            <span className="sr-only">
              {data.id}: {data.host} - {data.title}
            </span>
            Show notes<span className="absolute inset-0"></span>
          </a>
        </Link>
      </div>
    </div>
  );
};
