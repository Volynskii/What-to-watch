import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";
import {connect} from "react-redux";
import GenresList from "../genres-list/genres-list.jsx"
import withActiveElement from "../../hocs/with-active-element";

function MoviesCatalog(props) {
  const {moviesGenreGroups = {}, activeGenre, onGenreChange,onMoviesMore, setActiveElement, resetActiveElement} = props;

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">
        {`Catalog`}
      </h2>
      <GenresList
        genres={Object.keys(moviesGenreGroups)}
        activeGenre={activeGenre}
        onGenreChange={onGenreChange}/>
      <div className="catalog__movies-list">
        {moviesGenreGroups[activeGenre].map((it = {}) => (
          <SmallMovieCard
            key={it.id}
            card={it}
            onMouseEnter={setActiveElement}
            onMouseLeave={resetActiveElement}/>
        ))}
      </div>
      {(typeof onMoviesMore === `function`) && (
        <div className="catalog__more">
          <button
            className="catalog__button"
            type="button"
            onClick={onMoviesMore}>
            {`Show more`}
          </button>
        </div>
      )}
    </section>
  );
}



export {MoviesCatalog};
export default withActiveElement(MoviesCatalog);

