import type { AppProps } from 'next/app'
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <div className="container mx-auto mt-8">
    <Component {...pageProps} />

  </div>
  );
}

export default MyApp;
