import React, { useState } from 'react';
import {Route} from "react-router-dom";

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from "./Movies/Movie";

const App = () => {
  const [savedList, setSavedList] = useState( [] );
  const [idList, setIdList] = useState([]);

  const addToSavedList = (movie) => {
    if (idList.includes(movie.id)) {
      alert("This movie is already on the list!");
    } else {
      setSavedList( [...savedList, movie] );
      setIdList( [...idList, movie.id]);
    }
  };

  return (
    <div>
      <SavedList list={savedList}/>
      <Route exact path="/" component={MovieList}/>
      <Route path ="/movies/:id" component={(props) => <Movie {...props} add={addToSavedList} />}/>
    </div>
  );
};

export default App;
