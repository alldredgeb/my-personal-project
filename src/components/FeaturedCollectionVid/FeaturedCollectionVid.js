import React, { Component } from 'react';
import './FeaturedCollectionVid.css';

class FeaturedCollectionVid extends Component {
  render() {
    return(
      <div className="text_and_vid">
        <p>Spring / summer collection is here!</p>
        <div className="video_wrapper">
          <div className="vid_iframe">
            <img class="ratio" src="http://placehold.it/16x9"/>
            <iframe src="https://player.vimeo.com/video/225104384" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    )
  }
}

export default FeaturedCollectionVid;