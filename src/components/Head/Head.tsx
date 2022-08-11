import NextHead from "next/head";
import { MetaInfo } from "../../types/models";
import { useRouter } from "next/router";

export function Head({ metaInfo }: { metaInfo: MetaInfo }) {
  const router = useRouter();

  const siteUrl = process.env.SITE_URL;

  const title =
    metaInfo.title.indexOf("Learn Amplify") > -1
      ? metaInfo.title
      : `${metaInfo.title} - Learn Amplify`;

  const url = `${process.env.SITE_URL}${router.asPath}`;

  return (
    <NextHead>
      <link rel="canonical" href={siteUrl} />
      <title>{title}</title>
      <meta name="description" content={metaInfo.description} />
      <meta name="author" content={metaInfo.author} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaInfo.description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={metaInfo.image} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={metaInfo.description} />
      <meta name="twitter:url" content={url} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@AWSAmplify" />
      <meta property="twitter:image" content={metaInfo.image} />
    </NextHead>
  );
}
