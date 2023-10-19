import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Script from "next/script";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-K78PJ85DCL`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-K78PJ85DCL');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}

export default App;
