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
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);

  const fetchHandler = useCallback(async (searchTerm) => {
    if (search.length > 0) {
      const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${APIkey}&tags=${searchTerm}&per_page=24&format=json&nojsoncallback=1`;
      await axios.get(url)
        .then(setData([]))
        .then(res => setData(res.data.photos.photo))
    }
  }, [search])

  useEffect(() => {
    fetchHandler(search);
  }, [search, fetchHandler])

  return (
    <BrowserRouter>
      <Search search={search} setSearch={setSearch} />
      <Nav />
      <Switch>
        <Route path="/" render={() => <PhotoContainer data={data} />} />
        <Route path="/cats" render={() => <PhotoContainer data={data} />} />
        <Route path="/dogs" render={() => <PhotoContainer data={data} />} />
        <Route path="/computers" render={() => <PhotoContainer data={data} />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;