// import { useRouter } from 'next/router'
// import { type AppProps } from 'next/app'

import { GlobalStyle } from '@/components/globalStyles';
import { GlobalStateProvider } from "../context/GlobalStateContext";

const MyApp = ({ Component, pageProps }) => {
  // const router = useRouter()

  // useEffect(() => {
  //   // Redirecionamento da página inicial para /layout
  //   void router.replace('/layout')
  // }, [router])

  // // Renderiza apenas um placeholder enquanto o redirecionamento está sendo processado
  // if (router.pathname !== '/layout') {
  //   return null
  // }
  return (
    <GlobalStateProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </GlobalStateProvider>
  );
};

export default MyApp;
