import { component$, Slot } from '@builder.io/qwik';
import { Link, type RequestHandler } from '@builder.io/qwik-city';

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export default component$(() => {
  return (
    <>
      <header class="w-11/12 lg:max-w-3xl mx-auto py-4">
        <Link href="/" class="text-bold text-6xl text-center hover:underline">
          Qwik + Sanity
        </Link>
      </header>
      <main class="w-11/12 lg:max-w-3xl mx-auto">
        <Slot />
      </main>
    </>
  );
});
