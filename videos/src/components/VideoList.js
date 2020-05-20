import React from "react";
import VideoItem from "./VideoItem";

class VideoList extends React.Component {
  render() {
    const videos = this.props.videos.map((video) => {
      return <VideoItem key={video.id.videoId} video={video} />;
    });
    return <div className="ui cards">{videos}</div>;
  }
}

export default VideoList;
