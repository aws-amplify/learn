import "@aws-amplify/ui-react/styles.css";
import "../styles/index.scss";
import type { AppProps } from "next/app";
import config from "../aws-exports";
import { Amplify } from "aws-amplify";

function MyApp({ Component, pageProps }: AppProps) {
  Amplify.configure(config);

  return <Component {...pageProps} />;
}

export default MyApp;
