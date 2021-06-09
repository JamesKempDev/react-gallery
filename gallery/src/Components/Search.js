import React from 'react';
import { useHistory } from 'react-router-dom';

const Search = ({ setSearch }) => {

  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearch(event.target.search.value);
    let url = `/${event.target.search.value}`;
    event.currentTarget.reset();
    history.push(url);
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