import "@aws-amplify/ui-react/styles.css";
import "../styles/index.scss";
import type { AppProps } from "next/app";
import awsmobile from "../aws-exports";
import { Amplify } from "aws-amplify";
import { useEffect, useState } from "react";
import { configureAdobeAnalytics, pageView } from "../utils/track";
import { useRouter } from "next/router";

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
  const router = useRouter();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    configureAdobeAnalytics();

    setHasMounted(true);
  }, []);

  useEffect(() => {
    const handleRouteChange = (url: any) => {
      const origin = window.location.origin;

      pageView(`Page view for ${url}`, `${origin}${url}`);
    };

    router.events.on("routeChangeStart", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router.events]);

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
