import React from 'react'
import Table from './components/Table' 
import { useQuery, gql } from '@apollo/client';

const FEED_QUERY = gql`{
  products {
    product
    nativeId
    state
    description
    comment
  }
}`;

function App() {
  const columns = React.useMemo(() => [
    {
      Header: "Product",
      accessor: 'product',
 
    },
    {
      Header: "NativeId",
      accessor: 'nativeId',
    },
    {
      Header: "State",
      accessor: 'state',
    },
    {
      Header: "Description",
      accessor: 'description',
    },
    {
      Header: "Comment UL",
      accessor: 'comment',
    },
  ], [])

  const { loading, error, data } = useQuery(FEED_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  const propertyVal = Object.values(data).flatMap(arr => arr)
  console.log("this",propertyVal)
  console.log("that",data)

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="">
          <h1 className="text-xl font-semibold">IG Creator</h1>
        </div>
        <div className="mt-6">
          <Table columns={columns} data={propertyVal} />
        </div>
      </main>
    </div>
  );
}
export default App;