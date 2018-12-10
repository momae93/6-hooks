import React, { useState, useEffect } from 'react';
import Post from './Post';


// Use effect : we need to put an array at the end to stop the fetching
// Appeler l'url
const PostsList = ({ posts = [] }) => {
  const [fetchedPosts, setFetchedPosts] = useState(posts);

  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/posts';

    fetch(url)
      .then((data) => data.json())
      .then((data) => setFetchedPosts(data))
      .catch(() => console.log('Sorry an error occured !'));
  }, []);

  return (
    <ul style={{ listStyle: 'none', width: '800px' }}>
      {fetchedPosts.map(p => (
        <Post data={p} />
      ))}
    </ul>
  );
}

export default PostsList;
