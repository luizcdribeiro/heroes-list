import type { AppProps } from 'next/app'
import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <div className="container mx-auto mt-8">
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>

  </div>
  );
}

export default MyApp;
