import React, { useState, useEffect } from 'react';

// Define a type for the fetched data
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function DataFetcher() {
  const [data, setData] = useState<Post[]>([]);

  useEffect(() => {
    // Fetch data from an API
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data: Post[]) => setData(data)); // Specify the type here
  }, []);

  return (
    <div>
      <h1>Data Fetcher</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default DataFetcher;
