import React from 'react';
import { BaseComponent } from '../BaseComponent/BaseComponent';

import './TrackList.css';
import Track from '../Track/Track';


class TrackList extends BaseComponent {
  render() {
    return (
      <div className="TrackList">
        {this.props.tracks.map(track => <Track key={track.id} onAdd={this.props.onAdd} track={track} onRemove={this.props.onRemove}  />)}
      </div>
    );
  }
}

export default TrackList;
