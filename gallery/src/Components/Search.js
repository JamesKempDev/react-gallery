import React from 'react';
import { useHistory } from 'react-router-dom';

const Search = ({ setSearch }) => {

  // Control history in browser.

  const history = useHistory();

  // Handle submit function, prevents page refresh, sets the search term to the value of the search field
  // push the URL to the history stack, reset the input field, listen for URL change.
  // If there is a url change at this point, set the search to the substring URL which will trigger
  // the fetch function in App.js

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearch(event.target.search.value);
    let url = `/${event.target.search.value}`;
    event.currentTarget.reset();
    history.push(url);
    history.listen((location, action) => {
      setSearch(location.pathname.substring(1));
    })
  }

  // Display the search form.

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