import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import ReactMarkdown from 'react-markdown';
import { fetchItems } from '../../cosmosService';

export default function Post({ post }) {
  //const [coverImage, setCoverImage] = useState(null);

  /*useEffect(() => {
    if (post?.coverImage) {
      // Здесь мы должны получить URL изображения или какой-то другой идентификатор
      // Например, если у вас есть функция для получения URL изображения, используйте её
      // const imageKey = await getCoverImageURL(post.coverImage);
      // setCoverImage(imageKey);
    }
  }, [post]);

  console.log('Rendered post: ', post);
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!post) {
    return <div>Post not found</div>;
  }*/

  return (
      <div>
        <p>posts</p>
        {/*<h1 className="text-5xl mt-4 font-semibold tracking-wide">{post.name}</h1>
        <p className="text-sm font-light my-4">{post.description}</p>
        <div className="mt-8">
          <ReactMarkdown className='prose' children={post.content || 'No content'} />
        </div>*/}
      </div>
  );
}

/*export async function getStaticPaths() {
  const querySpec = {
    query: 'SELECT * from c'
  };
  const postData = await fetchItems(querySpec.query);
  console.log('Fetched items for paths:', postData); // Добавьте отладочный вывод для путей
  const paths = postData.map(post => ({ params: { id: post.id } }));
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const querySpec = {
    query: 'SELECT * from c WHERE c.id = @id',
    parameters: [
      { name: '@id', value: id }
    ]
  };
  const postData = await fetchItems(querySpec.query, querySpec.parameters);
  console.log('Fetched postData for id:', id, postData); // Добавьте отладочный вывод для postData
  const post = postData.length > 0 ? postData[0] : null;
  console.log('Post for getStaticProps:', post); // Добавьте отладочный вывод для post
  return {
    props: {
      post,
    },
  };
}*/
