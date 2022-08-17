import "@aws-amplify/ui-react/styles.css";
import "../styles/index.scss";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { configureAdobeAnalytics, trackPageView } from "../utils/track";
import { useRouter } from "next/router";
import Modal from "react-modal";

function MyApp({ Component, pageProps }: AppProps) {
  Modal.setAppElement("#__next");

  const router = useRouter();

  useEffect(() => {
    configureAdobeAnalytics();
  }, []);

  useEffect(() => {
    const handleRouteChange = (url: any) => {
      const origin = window.location.origin;

      trackPageView(`Page view for ${url}`, `${origin}${url}`);
    };

    const handleRouteChangeComplete = () => {
      // Work around for firefox not always scrolling to the top
      window.scroll({
        top: 1,
        left: 0,
        behavior: "smooth",
      });
    };

    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, [router]);

  return <Component {...pageProps} />;
}

export default MyApp;
