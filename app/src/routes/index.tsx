import { component$ } from '@builder.io/qwik';
import { routeLoader$, type DocumentHead, Link } from '@builder.io/qwik-city';
import { getPosts } from '../lib/sanity.queries';

export const usePosts = routeLoader$(async () => {
  const posts = await getPosts();

  return posts;
});

export default component$(() => {
  const posts = usePosts();

  return (
    <ul class="list-decimal">
      {posts.value.map((post) => {
        return (
          <li key={post._id}>
            <Link
              href={`/post/${post.slug.current}/`}
              class="hover:underline text-2xl"
            >
              {post.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
