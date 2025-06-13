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

// -----------------------------------------------------------------

// import { useEffect } from 'react';
// import Script from 'next/script';

// import { GlobalStyle } from '@/styles/globalStyles';
// import { GlobalStateProvider } from '../context/GlobalStateContext';

// const GA_ID = 'G-T9MLFWWB7M';

// const MyApp = ({ Component, pageProps }) => {

//   const ENABLE_GA = process.env.NEXT_PUBLIC_ENABLE_GA === 'true';
//   console.log(process.env.NEXT_PUBLIC_ENABLE_GA, "process.env.NEXT_PUBLIC_ENABLE_GA");
//   console.log(ENABLE_GA, "ENABLE_GA");

//   useEffect(() => {
//     if (!ENABLE_GA) return;

//     window.dataLayer = window.dataLayer || [];
//     function gtag() {
//       window.dataLayer.push(arguments);
//     }
//     gtag('js', new Date());
//     gtag('config', GA_ID);
//   }, []);

//   return (
//     <GlobalStateProvider>
//       <GlobalStyle />
//       {ENABLE_GA && (
//         <Script
//           strategy="afterInteractive"
//           src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
//         />
//       )}
//       <Component {...pageProps} />
//     </GlobalStateProvider>
//   );
// };

// export default MyApp;


import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Script from 'next/script';

import { GlobalStyle } from '@/styles/globalStyles';
import { GlobalStateProvider } from '../context/GlobalStateContext';
import { FlippedStateProvider } from '../context/FlippedContext';

const GA_ID = 'G-T9MLFWWB7M';

const MyApp = ({ Component, pageProps }) => {
  const ENABLE_GA = process.env.NEXT_PUBLIC_ENABLE_GA === 'true';
  const [gaInitialized, setGaInitialized] = useState(false);
  const router = useRouter();

  // Dispara o page_view no GA quando rota mudar
  useEffect(() => {
    if (!gaInitialized || !ENABLE_GA) return;

    const handleRouteChange = (url) => {
      window.gtag('config', GA_ID, {
        page_path: url,
      });
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [gaInitialized, ENABLE_GA, router.events]);

  const handleGtagLoad = () => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag;

    gtag('js', new Date());
    gtag('config', GA_ID, {
      page_path: window.location.pathname,
    });

    setGaInitialized(true);
  };

  return (
    <GlobalStateProvider>
      <FlippedStateProvider>
        <GlobalStyle />

        {ENABLE_GA && (
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            onLoad={handleGtagLoad}
          />
        )}

        <Component {...pageProps} />
      </FlippedStateProvider>
    </GlobalStateProvider>
  );
};

export default MyApp;

