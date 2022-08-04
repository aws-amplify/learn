import "@aws-amplify/ui-react/styles.css";
import "../styles/index.scss";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { configureAdobeAnalytics, trackPageView } from "../utils/track";
import { useRouter } from "next/router";

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

      trackPageView(`Page view for ${url}`, `${origin}${url}`);
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
