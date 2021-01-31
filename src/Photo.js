import React from 'react';
import PropTypes from 'prop-types';

const imgWithClick = { cursor: 'pointer' };

/**
 * 
 * This file is an extension of the photo component exported by react-photo-gallery
 * This extended component adds additional image related text on top of the image
 */

const Photo = ({ index, onClick, photo, margin, direction, top, left, key }) => {
  const imgStyle = { margin: margin, display: 'block' };
  const containerStyle = { position: 'relative', textAlign: 'center', color: 'white'}
  const authorStyle = { position: 'absolute', bottom: '30px', left: '16px', fontSize: 10 }
  const dimensionStyle = { ...authorStyle, bottom: '20px' }
  const urlStyle = { ...authorStyle, bottom: '10px' }

  if (direction === 'column') {
    imgStyle.position = 'absolute';
    imgStyle.left = left;
    imgStyle.top = top;
  }

  const handleClick = event => {
    onClick(event, { photo, index });
  };

  return (
      <div style={containerStyle}>
        <img
          key={key}
          style={onClick ? { ...imgStyle, ...imgWithClick } : imgStyle}
          {...photo}
          onClick={onClick ? handleClick : null}
        />
        <div style={authorStyle}>Author: {photo.author}</div>
        <div style={dimensionStyle}>Dimensions: {Math.round(photo.width)} x {Math.round(photo.height)}</div>
        <div style={urlStyle}>URL: {photo.download_url}</div>
      </div>
    
  );
};

export const photoPropType = PropTypes.shape({
  key: PropTypes.string,
  src: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  alt: PropTypes.string,
  title: PropTypes.string,
  srcSet: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  sizes: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
});

Photo.propTypes = {
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func,
  photo: photoPropType.isRequired,
  margin: PropTypes.number,
  top: props => {
    if (props.direction === 'column' && typeof props.top !== 'number') {
      return new Error('top is a required number when direction is set to `column`');
    }
  },
  left: props => {
    if (props.direction === 'column' && typeof props.left !== 'number') {
      return new Error('left is a required number when direction is set to `column`');
    }
  },
  direction: PropTypes.string,
};

export default Photo;