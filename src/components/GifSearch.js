import React, { useState } from 'react';

const GifSearch = ({ onSearchSubmit }) => {
  // State to store the search query
  const [query, setQuery] = useState('');

  // Function to handle text input change
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Invoke the callback prop with the current search query
    onSearchSubmit(query);
  };

  return (
    <div>
      <h2>Gif Search</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Search Gifs:
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default GifSearch;
