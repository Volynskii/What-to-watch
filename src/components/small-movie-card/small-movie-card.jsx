import React, {PureComponent} from "react";
import withPlayer from "../../hocs/with-player"
import {Link} from "react-router-dom";
import {MovieCardPropTypes} from "../../prop-types";

 class SmallMovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this._handleMouseEnter = this._handleMouseEnter.bind(this);
    this._handleMouseLeave = this._handleMouseLeave.bind(this);

  }

  render() {
    const {card,renderPlayer} = this.props;
    const {id, title, images, trailer} = card;

    return (
      <article
        id={`movie-${id}`}
        className="small-movie-card catalog__movies-card"
        onMouseEnter={this._handleMouseEnter}
        onMouseLeave={this._handleMouseLeave}>
        <div className="small-movie-card__image">
          {renderPlayer({
            src: trailer,
            poster: images.preview,
            muted: true,
          })}
        </div>
        <h3 className="small-movie-card__title">
          <Link
            className="small-movie-card__link"
            href={`/film/${id}`}>
            {title}
          </Link>
        </h3>
      </article>
    );
  }

   _handleMouseEnter() {
     const {card, onPlayerPlay, onMouseEnter} = this.props;

     onPlayerPlay();
     onMouseEnter(card);
   }

   _handleMouseLeave() {
     const {card, onPlayerPause, onMouseLeave} = this.props;

     onPlayerPause();
     onMouseLeave(card);
   }

}
export {SmallMovieCard};
export default withPlayer({autoPlayTimeout: 500})(SmallMovieCard);
