import React from 'react';
import {Link,NavLink} from "react-router-dom";

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie" key={movie.id}><NavLink activeClassName="selected-movie" to={`/movies/${movie.id}`}>{movie.title}</NavLink></span>
    ))}
    <Link to="/"><div className="home-button">Home</div></Link>
  </div>
);

export default SavedList;
