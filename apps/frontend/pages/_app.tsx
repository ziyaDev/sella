import { AppProps } from 'next/app';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';


const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',

  cache: new InMemoryCache(),
});



function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>

      <main>
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      </main>
    </>
  );
}

export default CustomApp;
