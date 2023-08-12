import { component$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import { QPortableText } from '~/integrations/react/portableText';
import { getPost } from '~/lib/sanity.queries';
import { urlForImage } from '~/lib/sanity.image';

export const usePost = routeLoader$(({ params }) => {
  const slug = params.slug;
  const post = getPost(slug);

  return post;
});

export default component$(() => {
  const post = usePost();
  return (
    <section>
      <figure>
        <img
          src={urlForImage(post.value.mainImage!).width(500).height(300).url()}
          alt={`Cover image for ${post.value.title}`}
          width={500}
          height={300}
          class="rounded"
        />
      </figure>
      <article>
        <h1 class="text-xl font-semibold">{post.value.title}</h1>
        <p>{post.value.excerpt}</p>
        <p>{post.value._createdAt}</p>
        <div class="text-xl">
          <QPortableText value={post.value.body} />
        </div>
      </article>
    </section>
  );
});
