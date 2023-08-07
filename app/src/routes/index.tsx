import { component$ } from '@builder.io/qwik';
import { routeLoader$, type DocumentHead } from '@builder.io/qwik-city';
import { client } from '~/lib/sanity';

export const usePets = routeLoader$(async () => {
  const data = await client.fetch(`*[_type == "pet"]`);

  if (data) {
    return {
      pets: data,
    };
  }
  return {
    pets: [],
  };
});

export default component$(() => {
  return (
    <>
      <h1>Hi 👋</h1>
      <p>
        Can't wait to see what you build with qwik!
        <br />
        Happy coding.
      </p>
    </>
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
