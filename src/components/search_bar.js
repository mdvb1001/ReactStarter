import React, { Component } from 'react';


class SearchBar extends Component {
  constructor(props) {
    super(props); // if not declared, you will get an error

    this.state = { term: ''};
  }
  render() {
    return (
      <div>
        <input onChange={event => this.setState({ term: event.target.value })} />
        Value of the input: {this.state.term}
      </div>
    );
  }
}

export default SearchBar;
