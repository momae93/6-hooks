import React from 'react';
import FavouriteToggle from './FavouriteToggle';

const Post = ({ data }) => (
  <li
    style={{
      backgroundColor: 'white',
      color: '#333',
      margin: '5px',
      padding: '10px',
      fontSize: '11pt',
      cursor: 'pointer'
    }}
  >
    <span style={{ fontWeight: '900' }}>{data.title}</span>

    <FavouriteToggle style={{ float: 'right' }} />
  </li>
);

export default Post;
