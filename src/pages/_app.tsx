import "@aws-amplify/ui-react/styles.css";
import "../styles/index.scss";
import type { AppProps } from "next/app";
import awsmobile from "../aws-exports";
import { Amplify } from "aws-amplify";
import { useEffect, useState } from "react";
import { configureAdobeAnalytics } from "../utils/track";

Amplify.configure({ ...awsmobile, ssr: true });
if (process.env.NODE_ENV === "production") {
  Amplify.configure({
    ...{
      ...awsmobile,
      aws_appsync_graphqlEndpoint: "https://learn-backend.amplify.aws/graphql",
    },
    ssr: true,
  });
}

function MyApp({ Component, pageProps }: AppProps) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    configureAdobeAnalytics();

    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
