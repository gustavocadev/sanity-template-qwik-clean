# A minimal Qwik site with Sanity Studio

This starter uses [Qwik](https://qwik.builder.io/) for the frontend and [Sanity](https://sanity.io/) to handle its content.

## Featuring

- How to fetch content as data from [the Sanity Content Lake](https://www.sanity.io/docs/datastore)
- How to render block content with [Portable Text](https://www.sanity.io/docs/presenting-block-text) \*The library has not an implementation available for Qwik\*.
- A [Sanity Studio](https://www.sanity.io/docs/sanity-studio) to create and edit content
- How to crop and render images with [Sanity Image URLs](https://www.sanity.io/docs/image-url)

> **Note**
>
> This starter features an `/app` and a `/studio` folder. The `/app` folder contains the frontend code, and the `/studio` folder contains the Sanity Studio code.
>
> This is **not** a monorepo setup. We put them both in one repository for the sake of simplicity. You might want to have separate repositories for each of the folders, to make it easier to deploy the app and the studio separately.

## Prerequisities

- [Node.js](https://nodejs.org/en/) (v16.00 or later)
- [Sanity CLI](https://www.sanity.io/docs/getting-started-with-sanity-cli) (optional)

## Getting started

The following commands are meant to be run in **both** the `/app` and `/studio` folders.

1. `pnpm install` to install dependencies
2. `pnpm dlx sanity init --env`, this will:

- ask you to select or create a Sanity project and dataset, use the same Sanity project and dataset in both folders.
- output a `.env` file with appropriate variables
- _(or use `sanity init --env` if you have the CLI installed)_

4. Prefix your environment variables in the SvelteKit `/app` folder with `PUBLIC_`, they should be `PUBLIC_SANITY_DATASET` and `PUBLIC_SANITY_PROJECT_ID`.
5. `pnpm run dev` to start the development server

Your Qwik app should now be running on [http://localhost:5173/](http://localhost:5173/) and Studio on [http://localhost:3333/](http://localhost:3333/).

_Feel free to move each of the folders to their own location and check them into version control._

## Deployments

The `/app` and `/studio` folders are meant to be deployed separately.

Feel free to deploy the App to whichever hosting provider you prefer. We recommend [Vercel](https://vercel.com/).

You can deploy the Sanity Studio by running `sanity deploy` in the `/studio` repository, provided you have the `@sanity/cli` installed globally.
