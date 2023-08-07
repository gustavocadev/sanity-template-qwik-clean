import type { PortableTextBlock } from '@portabletext/types';
import type { ImageAsset, Slug } from '@sanity/types';
import groq from 'groq';
import { client } from './sanity';

export const postsQuery = groq`*[_type == "post" && defined(slug.current)] | order(_createdAt desc)`;

export const getPosts = async (): Promise<Post[]> => {
  return client.fetch(postsQuery);
};

export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0]`;

export const getPost = async (slug: string): Promise<Post> => {
  return client.fetch(postBySlugQuery, {
    slug,
  });
};

export const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`;

export interface Post {
  _type: 'post';
  _id: string;
  _createdAt: string;
  title?: string;
  slug: Slug;
  excerpt?: string;
  mainImage?: ImageAsset;
  body: PortableTextBlock[];
}
