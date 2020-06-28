function MovieCard(data = {}) {

  this.id = data.id;
  this.title = data.name;
  this.genre = data.genre;
  this.img = data.preview_image;
  this.trailer = data.video_link;
}

export default MovieCard;
