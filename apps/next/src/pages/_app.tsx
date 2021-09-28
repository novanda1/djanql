import { AppProps } from 'next/app';
import Head from 'next/head';
import 'tailwindcss/tailwind.css';
import { Header } from '../components/Header';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to next!</title>
      </Head>
      <div className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="relative max-w-2xl mx-auto">
          <Header />
          <main>
            <div className="mt-7">
              <Component {...pageProps} />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default CustomApp;
