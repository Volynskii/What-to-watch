import React, {Component, Fragment} from 'react';
import films from "./../../mocks/films";

import MoviesCatalog from "../movies-catalog/movies-catalog.jsx";
import MovieTabs from '../movie-page/movie-page.jsx'
import {Overviews,Details,Reviews} from '../../mocks/movie-page-tabs.jsx'
console.log()
const App = ({films}) => (
  <div className="page-content">
    <MovieTabs
      Overviews={Overviews()}
      Reviews={Reviews()}
      Details={Details()}
    />
  </div>
);



export default App;
