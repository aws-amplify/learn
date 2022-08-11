import NextHead from "next/head";
import { MetaObject } from "../../types/models";

export function Head({ metaObject }: { metaObject: MetaObject }) {
  const meta = {
    title: metaObject.title,
    image: metaObject.image,
    description: metaObject.description,
    url: metaObject.url,
    author: metaObject?.author ?? "",
  };

  return (
    <NextHead>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta name="author" content={meta.author} />
      <meta property="og:title" content={meta.title} key="og:title" />
      <meta property="og:url" content={meta.url} key="og:url" />
      <meta property="og:image" content={meta.image} key="og:image" />
      <meta property="og:description" content={meta.description} />
      <meta property="twitter:card" content="summary" key="twitter:card" />
      <meta property="twitter:title" content={meta.title} key="twitter:title" />
      <meta name="twitter:site" content="@AWSAmplify" />
      <meta
        property="twitter:description"
        content={meta.description}
        key="twitter:description"
      />
      <meta name="twitter:url" content={meta.url} />
      <meta property="twitter:image" content={meta.image} key="twitter:image" />
    </NextHead>
  );
}
