import React, {PureComponent} from "react";


class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);
    this._videoRef = React.createRef();
  }

  render() {
    const {src, poster, width, height, muted} = this.props;

    return (
      <video
        ref={this._videoRef}
        src={src}
        poster={poster}
        width={width}
        height={height}
        muted={muted}
        preload="none"/>
    );
  }

  play() {
    const video = this._videoRef.current;
    if (video) {
      return video.play();
    }
    return Promise.reject();
  }

  stop() {
    const video = this._videoRef.current;
    if (video) {
      video.load();
    }
  }

  pause() {
    const video = this._videoRef.current;
    if (video) {
      video.pause();
    }
  }
}

export default VideoPlayer
