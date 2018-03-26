import React from 'react';
import { BaseComponent } from '../BaseComponent/BaseComponent';

import './SearchResults.css';
import TrackList from '../TrackList/TrackList';


class SearchResults extends BaseComponent {
  render() {
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        <TrackList onAdd={this.props.onAdd} tracks={this.props.searchResults}  />
      </div>
    );
  }
}

export default SearchResults;
