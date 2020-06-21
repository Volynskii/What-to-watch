import React from 'react';
import {connect} from "react-redux";
import MoviesCatalog from "../movies-catalog/movies-catalog.jsx";
import MovieTabs from '../movie-page/movie-page.jsx'
import {Overviews,Details,Reviews} from '../../mocks/movie-page-tabs.jsx'
import {getMoviesByGenres, changeMoviesActiveGenre} from "./../../reducer"
import GenresList from "../genres-list/genres-list.jsx"

export const App = ({moviesGenreGroups, activeGenre, onGenreChange}) => (
  <div className="page-content">
    <MoviesCatalog
      moviesGenreGroups={moviesGenreGroups}
      activeGenre={activeGenre}
      onGenreChange={onGenreChange}/>
  </div>
);

const mapStateToProps = (state) => {
  return {
    moviesGenreGroups: getMoviesByGenres(state),
    activeGenre: state.activeGenre,
  };
};

const mapDispatchToProps = {onGenreChange: changeMoviesActiveGenre};

export default connect(mapStateToProps, mapDispatchToProps)(App);

