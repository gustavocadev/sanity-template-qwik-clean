/** @jsxImportSource react */

import { qwikify$ } from '@builder.io/qwik-react';
import { PortableText, type PortableTextComponents } from '@portabletext/react';
import type { PortableTextBlock } from '@portabletext/types'
import type { Image } from '@sanity/types';
import { urlForImage } from '~/lib/sanity.image';

type Props = {
  value: PortableTextBlock[];
  paragraphClassName?: string;
  containerClassName?: string;
};

const CustomPortableText = (props: Props) => {
  const components: PortableTextComponents = {
    block: {
      normal: ({ children }) => {
        return <p className={props.paragraphClassName}>{children}</p>;
      },
    },
    marks: {
      link: ({ children, value }) => {
        return (
          <a
            className="underline transition hover:opacity-50"
            href={value?.href}
            rel="noreferrer noopener"
          >
            {children}
          </a>
        );
      },
      // for lists
    },
    list: {
      number: ({ children }) => {
        return <ul className="list-decimal">{children}</ul>;
      },
      bullet: ({ children }) => {
        return <ul className="list-disc">{children}</ul>;
      },
    },
    types: {
      image: ({ value }: { value: Image & { alt?: string } }) => {
        const imgUrl = value && urlForImage(value).url();
        return (
          <figure className="my-6 space-y-2">
            <img src={imgUrl} width="100%" height="100%" alt={value.alt} />
          </figure>
        );
      },
    },
  };
  return (
    <section className={props.containerClassName}>
      <PortableText value={props.value} components={components} />
    </section>
  );
};

export const QCustomPortableText = qwikify$(CustomPortableText);

export const QPortableText = qwikify$(PortableText);
