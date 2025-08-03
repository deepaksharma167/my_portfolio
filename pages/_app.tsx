import type { AppProps } from "next/app";
import Navigation from "../components/Navigation";
import "../styles/main.scss";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        src="https://kit.fontawesome.com/7cbfd13fa0.js"
        strategy="afterInteractive"
        crossOrigin="anonymous"
      />
      <Navigation />
      <Component {...pageProps} />
      <footer id="main-footer">Copyright &copy; 2025</footer>
    </>
  );
}
