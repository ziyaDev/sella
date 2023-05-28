import { NextPage } from 'next'
import { gql } from '@apollo/client';
import client from './apollo-client';
import { GetServerSideProps } from 'next';

interface HelloData {
  hello: string;
  helloInput: string;
  test: boolean;
}

interface Props {
  data: {
    data?: HelloData;
    error?: Error;
  };
}

const Index: NextPage<Props> = ({ data }) => {
  if (!data) {
    return <div>Loading...</div>;
  }

  if (data.error) {
    return <div>Error</div>;
  }

  return (
    <div>
      <h1>{data.data?.hello}</h1>
      <h1>{data.data?.helloInput}</h1>
      <h1>{data.data?.test ? 'true' : "false"}</h1>
    </div>
  );
};



export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const GET_HELLO = gql`
    query {
      hello
      helloInput(name: "ziyad")
      test
    }
  `;


  return {
    props: {
      data: await client.query({
        query: GET_HELLO,
      }),
    },
  };
}

export default Index