import { NextPage } from 'next';
import { useQuery, gql } from '@apollo/client';

const GET_HELLO = gql`
  query {
    hello
    helloInput(name: "user")
    test
  }
`;

const Index: NextPage = () => {
  const { loading, error, data } = useQuery(GET_HELLO);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Oh no... {error.message}</p>;
  }

  return (
    <ul>
      <h1>{data.hello}</h1>
      <h1>{data.helloInput}</h1>
      <h1>{data.test ? 'true' : 'false'}</h1>

    </ul>
  );
};

export default Index;
