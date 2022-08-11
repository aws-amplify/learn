import Head from "next/head";
import { MetaInfo } from "../../types/models";
import { useRouter } from "next/router";

export function HeadCustom({ metaInfo }: { metaInfo: MetaInfo }) {
  const router = useRouter();

  const siteUrl = process.env.SITE_URL;

  const title =
    metaInfo.title.indexOf("Learn Amplify") > -1
      ? metaInfo.title
      : `${metaInfo.title} - Learn Amplify`;

  const url = `${process.env.SITE_URL}${router.asPath}`;

  return (
    <Head>
      <link rel="canonical" href={siteUrl} />
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={metaInfo.description} />
      <meta name="author" content={metaInfo.author} />
      <meta property="og:type" content="website" />
      <meta property="og:title" name="title" content={title} />
      <meta
        property="og:description"
        name="description"
        content={metaInfo.description}
      />
      <meta property="og:url" content={url} />
      <meta property="og:image" name="image" content={metaInfo.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaInfo.description} />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:site" content="@AWSAmplify" />
      <meta name="twitter:image" content={metaInfo.image} />
    </Head>
  );
}
