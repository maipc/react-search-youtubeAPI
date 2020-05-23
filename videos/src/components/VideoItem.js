import React from "react";

class VideoItem extends React.Component {
  render() {
    const video = this.props.video;
    return (
      <div
        className="item"
        style={{ cursor: "pointer" }}
        onClick={() => this.props.onVideoSelect(video)}
      >
        <div className="image">
          <img
            src={video.snippet.thumbnails.medium.url}
            alt={video.snippet.description}
            style={{ width: "200px" }}
          />
        </div>
        <div className="content">
          <div className="header">{video.snippet.title}</div>
        </div>
      </div>
    );
  }
}

export default VideoItem;
