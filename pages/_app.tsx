import type { AppProps } from "next/app";
import "../styles/globals.css";
import "semantic-ui-css/semantic.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
