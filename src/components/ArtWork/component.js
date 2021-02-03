import React from 'react';
import PropTypes from 'prop-types';
import './ArtWork.css';

const ArtWork = (albumArtwork) => (
  <div className='album-artwork-container'>
    <img alt="artwork" className='album-artwork' src={albumArtwork.albumImage ? albumArtwork.albumImage : 'https://images-na.ssl-images-amazon.com/images/I/51bmJW%2BiGNL.png' } />
  </div>
);


ArtWork.propTypes = {
  albumArtwork: PropTypes.string
};

export default ArtWork;
