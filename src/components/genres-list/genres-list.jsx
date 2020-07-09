import React from "react";

export const GenresList = ({genres, activeGenre, onGenreChange}) => {
  const withActiveClass = (genre) =>
    genre === activeGenre ? `catalog__genres-item--active` : ``;
  const handleClickWith = (genre) => (event) => {
    event.preventDefault();
    onGenreChange(genre);
  };
  if (!Array.isArray(genres) || !genres.length) {
    return null;
  }
  return (
    <ul className="catalog__genres-list">
      {genres.map((it) => (
        <li key={it} className={`catalog__genres-item ${withActiveClass(it)}`}>
          <a
            className="catalog__genres-link"
            onClick={handleClickWith(it)}>
            {it}
          </a>
        </li>
      ))}
    </ul>
  );
};


export default GenresList;

