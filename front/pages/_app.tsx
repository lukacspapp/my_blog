import '../styles/index.css';
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component , pageProps: { session, ...pageProps } }: any) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;