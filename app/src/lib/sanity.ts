import { createClient } from '@sanity/client';

const PUBLIC_SANITY_DATASET = import.meta.env.PUBLIC_SANITY_DATASET;
const PUBLIC_SANITY_PROJECT_ID = import.meta.env.PUBLIC_SANITY_PROJECT_ID;

if (!PUBLIC_SANITY_PROJECT_ID || !PUBLIC_SANITY_DATASET) {
  throw new Error('Did you forget to run sanity init --env?');
}

export const client = createClient({
  projectId: PUBLIC_SANITY_PROJECT_ID,
  dataset: PUBLIC_SANITY_DATASET,
  useCdn: false, // `false` if you want to ensure fresh data
  apiVersion: '2023-03-20', // date of setup
});
