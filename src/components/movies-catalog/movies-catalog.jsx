import React, {PureComponent} from "react";
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";
import {connect} from "react-redux";
import GenresList from "../genres-list/genres-list.jsx"
console.log()
class MoviesCatalog extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null,

    };

    this._setActiveCard = this._setActiveCard.bind(this);
    this._resetActiveCard = this._resetActiveCard.bind(this);
  }

  render() {
    const {moviesGenreGroups = {}, activeGenre, onGenreChange} = this.props;

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
              onMouseEnter={this._setActiveCard}
              onMouseLeave={this._resetActiveCard}/>
          ))}
        </div>

        <div className="catalog__more">
          <button className="catalog__button" type="button">
            {`Show more`}
          </button>
        </div>
      </section>
    );
  }

  _setActiveCard(card) {
    this.setState({activeCard: card});
  }

  _resetActiveCard() {
    this.setState({activeCard: null});
  }

}

export default MoviesCatalog;

