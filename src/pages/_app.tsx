import "@aws-amplify/ui-react/styles.css";
import "../styles/index.scss";
import type { AppProps } from "next/app";
import awsmobile from "../aws-exports";
import { Amplify } from "aws-amplify";
Amplify.configure({ ...awsmobile, ssr: true });

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
