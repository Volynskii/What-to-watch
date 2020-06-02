import React, {Component, Fragment} from 'react';
import films from "./../../mocks/films";
import {testImport} from './../../mocks/myImport'

import MoviesCatalog from "../movies-catalog/movies-catalog.jsx";

const App = ({films}) => (
  <div className="page-content">
    <MoviesCatalog
      films={films}/>
  </div>
);



export default App;
