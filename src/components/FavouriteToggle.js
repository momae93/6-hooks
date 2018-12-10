import React from 'react';

const FavouriteToggle = ({ isActive = false, style = {} }) => (
  <span style={style}>{isActive ? '♥️' : '♡'}</span>
);

export default FavouriteToggle;
