import React,{PureComponent} from 'react';
import {connect} from "react-redux";
import MoviesCatalog from "../movies-catalog/movies-catalog.jsx";
import MovieTabs from '../movie-page/movie-page.jsx'
import {Overviews,Details,Reviews} from '../../mocks/movie-page-tabs.jsx'
import {loadMovies, changeMoviesActiveGenre} from "../../reducer/catalog/catalog";
import {getMoviesByGenres, getActiveGenre} from "../../reducer/catalog/selectors";
import GenresList from "../genres-list/genres-list.jsx"

export class App extends PureComponent {
  componentDidMount() {
    this.props.loadMovies();
  }

  render() {
    const {moviesGenreGroups, activeGenre, onGenreChange} = this.props;
    return (
      <div className="page-content">
        <MoviesCatalog
          moviesGenreGroups={moviesGenreGroups}
          activeGenre={activeGenre}
          onGenreChange={onGenreChange}/>
      </div>
    );
  }
}

App.defaultProps = {
  loadMovies: () => {},
};

const mapStateToProps = (state) => {
  return {
    moviesGenreGroups: getMoviesByGenres(state),
    activeGenre: getActiveGenre(state),
  };
};

const mapDispatchToProps = {
  onGenreChange: changeMoviesActiveGenre, loadMovies
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

