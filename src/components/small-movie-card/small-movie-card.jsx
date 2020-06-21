import React, {PureComponent} from "react";
import VideoPlayer from "../video-player/video-player.jsx";
import withPlayer from "../../hocs/with-player"

 class SmallMovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this._handleMouseEnter = this._handleMouseEnter.bind(this);
    this._handleMouseLeave = this._handleMouseLeave.bind(this);

  }

  render() {
    const {card,renderPlayer} = this.props;
    const {id, title, img, trailer} = card;

    return (
      <article
        id={id}
        className="small-movie-card catalog__movies-card"
        onMouseEnter={this._handleMouseEnter}
        onMouseLeave={this._handleMouseLeave}>
        <div className="small-movie-card__image">
          {renderPlayer({
            src: trailer,
            poster: img,
            muted: true,
          })}
        </div>
        <h3 className="small-movie-card__title">
          <a
            className="small-movie-card__link"
            href={`/film/${id}`}>
            {title}
          </a>
        </h3>
      </article>
    );
  }

   _handleMouseEnter() {
     const {card,  onPlayerPlay, onMouseEnter} = this.props;

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
