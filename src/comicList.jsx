import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ComicList() {

  const [comics, setComics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:3000/comics') // Replace with the URL of your Rails server
      .then(response => {
        setComics(response.data.data.results); // Adjust depending on the structure of the response
        setLoading(false);
      })
      .catch(error => {
        console.error('There was an error fetching the comics:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading comics...</div>;
  }

  return (
    <div>
      <h1>Marvel Comics</h1>
      <ul>
        {comics.map(comic => (
          <li key={comic.id}>{comic.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ComicList;
