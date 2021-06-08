import React, { useState } from 'react';

const Search = ({ search, setSearch, fetchHandler }) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchHandler(event.target.search.value);
    event.currentTarget.reset();
  }
  return (
    <form className="search-form" onSubmit={handleSubmit} >
      <input type="search"
        name="search"
        placeholder="Search" />
      <button type="submit" id="submit-btn" className="search-button"><i className="material-icons icn-search">search</i></button>
    </form>
  );
}

export default Search;