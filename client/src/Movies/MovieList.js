import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import MovieCard from "./MovieCard";
const MovieList = props => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovies(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    
    getMovies();
  }, []);
  
  return (

    <div className="movie-list">
      {movies.map(movie => (
        <div onClick={()=>{handleEvent(props,movie)}} key={movie.id}>
          <MovieCard movie={movie}/>
        </div>
      ))}
    </div>
  );
}

function handleEvent(props,movie) {
  props.history.push(`/movies/${movie.id}`);
}

export default MovieList;
