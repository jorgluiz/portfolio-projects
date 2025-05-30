// import { useEffect } from 'react';
// import Script from 'next/script';

// import { GlobalStyle } from '@/styles/globalStyles';
// import { GlobalStateProvider } from "../context/GlobalStateContext";

// const GA_ID = 'G-T9MLFWWB7M';

// const MyApp = ({ Component, pageProps }) => {
//   useEffect(() => {
//     window.dataLayer = window.dataLayer || [];
//     function gtag() { window.dataLayer.push(arguments); }
//     gtag('js', new Date());
//     gtag('config', GA_ID);
//   }, []);

//   return (
//     <GlobalStateProvider>
//       <GlobalStyle />
//       {/* Script externo do GA */}
//       <Script
//         strategy="afterInteractive"
//         src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
//       />
//       <Component {...pageProps} />
//     </GlobalStateProvider>
//   );
// };

// export default MyApp;

import { useEffect } from 'react';
import Script from 'next/script';

import { GlobalStyle } from '@/styles/globalStyles';
import { GlobalStateProvider } from '../context/GlobalStateContext';

const MyApp = ({ Component, pageProps }) => {

  const GA_ID = 'G-T9MLFWWB7M';

  const isLocalhost = typeof window !== 'undefined' && window.location.hostname === 'localhost';
  const ENABLE_GA = !isLocalhost && process.env.NEXT_PUBLIC_ENABLE_GA === 'true';
  console.log(ENABLE_GA, "ENABLE_GA");

  useEffect(() => {
    if (!ENABLE_GA) return;

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', GA_ID);
  }, []);

  return (
    <GlobalStateProvider>
      <GlobalStyle />
      {ENABLE_GA && (
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        />
      )}
      <Component {...pageProps} />
    </GlobalStateProvider>
  );
};

export default MyApp;
