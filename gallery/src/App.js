// Perform all imports

import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import APIkey from './config.js';
import './App.css';
import Search from './Components/Search';
import Nav from './Components/Nav';
import PhotoContainer from './Components/PhotoContainer';

function App() {

  // Set up search state, data from API call and loading state.

  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  // Fetch handler, sets loading to true which hides the 'no results' text, change the title of the
  // page to the search term, checks if the seach length is greater than 0 before pulling the data,
  // parse the data and add it to the 'data' state array, UseCallback to prevent unnecessary renders.

  const fetchHandler = useCallback(async (searchTerm) => {
    setIsLoading(true);
    document.title = searchTerm;
    if (search.length > 0) {
      const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${APIkey}&tags=${searchTerm}&per_page=24&format=json&nojsoncallback=1`;
      await axios.get(url)
        .then(setData([]))
        .then(res => setData(res.data.photos.photo))
    }
    setIsLoading(false);
  }, [search])

  // Fire the fetch handler if the dependency 'search' is changed

  useEffect(() => {
    fetchHandler(search);
  }, [search, fetchHandler])

  // Display the main app components passing data to the photocontainer.

  return (
    <BrowserRouter>
      <Search search={search} setSearch={setSearch} />
      <Nav setSearch={setSearch} />
      <Switch>
        <Route path="/" render={() => <PhotoContainer data={data} isLoading={isLoading} />} />
        <Route path="/cats" render={() => <PhotoContainer data={data} isLoading={isLoading} />} />
        <Route path="/dogs" render={() => <PhotoContainer data={data} isLoading={isLoading} />} />
        <Route path="/computers" render={() => <PhotoContainer data={data} isLoading={isLoading} />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;