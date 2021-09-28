import moment from 'moment';
import { useRouter } from 'next/router';
import { usePostQuery } from '../../generated/graphql';

export const PostDetail: React.FC = () => {
  const { query } = useRouter();

  const { data, loading, error } = usePostQuery({
    variables: {
      id: query.id as string,
    },
  });

  if (loading)
    return <div className="border-t-2 border-gray-100 pt-8">loading...</div>;

  if (error)
    return (
      <div className="border-t-2 border-gray-100 pt-8">
        {JSON.stringify(error)}
      </div>
    );

  return (
    <div className="border-t-2 border-gray-100 pt-8">
      <div>
        <p className="text-sm leading-5 text-gray-500">
          <time dateTime={moment(data?.post.created).format('YYYY[-]MM[-]DD')}>
            {moment(data?.post.created).format('MMMM d[,] YYYY')}
          </time>
        </p>
        <div>
          <h2 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
            <a href={`/${data?.post.id}`}>
              {data?.post.id}: {data?.post.host} - {data?.post.title}
            </a>
          </h2>
          <p className="mt-3 text-base leading-6 text-gray-600">
            {data?.post.excerpt}
          </p>
          <iframe
            className="my-8"
            width="100%"
            height="180"
            frameBorder="no"
            scrolling="no"
            src={data?.post.podcast}
          ></iframe>
          <div
            className="mt-4 prose"
            dangerouslySetInnerHTML={{ __html: data?.post.content }}
          ></div>
        </div>
      </div>
    </div>
  );
};