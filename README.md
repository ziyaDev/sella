# Sella


Sella is an example project showcasing a monorepo architecture with a separate Next.js frontend and NestJS backend. It provides simple setup to help you understand the integration between Next.js and NestJS.

## Project Structure

The project follows the following directory structure:


```
sella/
├─ apps/
│  ├─ backend/
│  │  ├─ src/
│  │  │  ├─ app/
│  │  │  │  ├─ app.controller.ts
│  │  │  │  ├─ app.module.ts
│  │  │  │  └─ app.service.ts
│  │  │  ├─ graphql/
│  │  │  │  ├─ hello/
│  │  │  │  │  ├─ hello.controller.ts
│  │  │  │  │  ├─ hello.module.ts
│  │  │  │  │  ├─ hello.resolver.ts
│  │  │  │  │  └─ hello.service.ts
│  │  │  │  └─ test/
│  │  │  │     ├─ test.controller.ts
│  │  │  │     ├─ test.module.ts
│  │  │  │     ├─ test.resolver.ts
│  │  │  │     └─ test.service.ts
│  │  │  └─ main.ts
│  ├─ frontend/
│  │  ├─ pages/
│  │  │  ├─ _app.tsx
│  │  │  ├─ index.tsx

```


- The `backend` directory contains the NestJS backend code.
- The `frontend` directory contains the Next.js frontend code.

## Prerequisites

Make sure you have the following installed on your machine:

- Node.js
- pnpm (Node Package Manager) or yarn

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:

   ```
   git clone https://github.com/ziyaDev/sella.git
    ```

   ```
   git clone https://github.com/ziyaDev/sella
   ```

 2. Install the dependencies for the backend and frontend:
    ```
    cd sella
    pnpm install
    ```



    Start the backend server:
    ```
    nx serve backend

    ```
    The backend server will start running on `http://localhost:3000`.

    Start the frontend development server:
    ```
    nx serve frontend 
    ```

    The frontend development server will start running on `http://localhost:4200`.

    Open your browser and visit `http://localhost:4200` to see the frontend application.



## Using the Backend API in Frontend

The backend API is accessible from the frontend to fetch data. You can make HTTP requests to the backend API using libraries like Axios, fetch, or Apollo Client.

Example code for fetching data from the backend API:

```
import { AppProps } from 'next/app';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';


const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql', // change the uri base on your backend Url

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

    
    

```

You can replace `uri` with the appropriate endpoint of your backend API.

## Contributing

If you'd like to contribute to this project, feel free to create a pull request with your changes. We welcome any improvements, bug fixes, or new features!