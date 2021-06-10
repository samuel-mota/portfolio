import { AppProps } from "next/app";
import DarkModeContextProvider from "../contexts/AppContext";

// hack for fontawesome works in next.js
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DarkModeContextProvider>
      <Component {...pageProps} />
    </DarkModeContextProvider>
  );
}

export default MyApp;
