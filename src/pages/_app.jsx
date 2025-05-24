import { useEffect } from 'react';
import Script from 'next/script';

import { GlobalStyle } from '@/components/globalStyles';
import { GlobalStateProvider } from "../context/GlobalStateContext";

const GA_ID = 'G-JXELT2K8RB';

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', GA_ID);
  }, []);

  return (
    <GlobalStateProvider>
      <GlobalStyle />
      {/* Script externo do GA */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />
      <Component {...pageProps} />
    </GlobalStateProvider>
  );
};

export default MyApp;
