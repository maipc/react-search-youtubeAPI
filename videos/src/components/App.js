import React from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import youtube from "../apis/youtube";

class App extends React.Component {
  state = { videos: [] };

  onSearchSubmit = async (term) => {
    const res = await youtube.get("/search", {
      params: { q: term },
    });
    this.setState({ videos: res.data.items });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <div className="ui grid">
          <div className="eleven wide column">
            <VideoDetail />
          </div>
          <div className="five wide column">
            <VideoList videos={this.state.videos} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
