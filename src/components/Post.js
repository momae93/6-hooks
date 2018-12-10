import React, {useState} from 'react';
import FavouriteToggle from './FavouriteToggle';

const Post = ({ data }) => {
  const [isBody, setIsBody] =  useState(false);

  return (
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
    <span style={{ fontWeight: '900' }} onClick={() => setIsBody(!isBody)}>
    {
      isBody ? data.body : data.title 
    }
    </span>

    <FavouriteToggle style={{ float: 'right' }} />
  </li>
  )
}

export default Post;
