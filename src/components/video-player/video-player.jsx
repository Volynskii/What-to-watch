import React, {PureComponent} from "react";


class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);
    this._videoRef = React.createRef();

  }
  componentDidUpdate(prevProps) {
    if (this.props.isPlaying !== prevProps.isPlaying) {
      console.log()
      this.toggle(React.createRef());
     //this.toggle()
    }
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

  toggle() {
    if (this.props.isPlaying) {
      this.play();
    } else {
      this.stop();
    }
  }

  play() {
    const video = this._videoRef.current;
    if (video) {
      video.play();
    }
  }

  stop() {
    const video = this._videoRef.current;
    if (video) {
      video.load();
    }
  }
}

export default VideoPlayer
