import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
    this.setState({ term: "" });
  };

  render() {
    return (
      <div style={{ margin: "10px auto 30px auto"}}>
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <div className="ui icon input">
              <input
                type="text"
                className="form-control"
                placeholder="Search for videos"
                value={this.state.term}
                onChange={(e) => this.setState({ term: e.target.value })}
              />
              <i className="search icon"></i>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
