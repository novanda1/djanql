import { ApolloProvider } from '@apollo/client';
import { AppProps } from 'next/app';
import Head from 'next/head';
import 'tailwindcss/tailwind.css';
import { Header } from '../components/Header';
import { useApollo } from '../lib/apolloClient';

function CustomApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps);

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="relative max-w-2xl mx-auto">
          <Header />
          <main>
            <div className="mt-7">
              <ApolloProvider client={apolloClient}>
                <Component {...pageProps} />
              </ApolloProvider>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default CustomApp;
