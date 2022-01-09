import { useQuery, gql } from '@apollo/client';

const FEED_QUERY = gql`{
  user(id: "4dc70521-22bb-4396-b37a-4a927c66d43b")  {
      id
      email
      name
  }
}`;

export default function App() {
  const { loading, error, data } = useQuery(FEED_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div className="container">
      <h1 className="text-3xl font-bold underline">Hamza</h1>
      <div className="row">
        <h2>UserID: {data.user.id}</h2>
      </div>
    </div>


  )
}