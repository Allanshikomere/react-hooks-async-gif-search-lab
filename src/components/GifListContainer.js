import React, { useState, useEffect } from 'react';
import GifList from './GifList'; // Assuming you have a GifList component
import GifSearch from './GifSearch'; // Assuming you have a GifSearch component

const GifListContainer = () => {
  // State to store the fetched gifs
  const [gifs, setGifs] = useState([]);

  // State to store the search query
  const [query, setQuery] = useState('');

  // Function to handle form submission
  const handleSearchSubmit = (searchQuery) => {
    setQuery(searchQuery);
  };

  // Effect to fetch gifs when the component mounts or when the query changes
  useEffect(() => {
    const fetchGifs = async () => {
      try {
        // Fetch data from the Giphy API using the provided API key
        const apiKey = 'https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=YOUR API KEY&rating=g';
        const response = await fetch(
          `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}&limit=3`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch gifs');
        }

        // Extract the gif data from the response
        const data = await response.json();

        // Update the component state with the fetched gifs
        setGifs(data.data);
      } catch (error) {
        console.error(error.message);
      }
    };

    // Fetch gifs when the component mounts or when the query changes
    fetchGifs();
  }, [query]);

  return (
    <div>
      <GifSearch onSearchSubmit={handleSearchSubmit} />

      
      <GifList gifs={gifs} />
    </div>
  );
};

export default GifListContainer;
