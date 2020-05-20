import React from "react";

class VideoItem extends React.Component {
  render() {
    const video = this.props.video.snippet;
    return (
      <div className="card">
        <div className="image">
          <img src={video.thumbnails.medium.url} alt={video.description} />
        </div>
        <div className="content">
          <div className="header">{video.title}</div>
        </div>
      </div>
    );
  }
}

export default VideoItem;
