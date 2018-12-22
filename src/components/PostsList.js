import React, { useState, useEffect, useRef } from 'react';
import Post from './Post';

const PostsList = ({ posts = [] }) => {
  const [fetchedPosts, setFetchedPosts] = useState(posts);
  const inputTitle = useRef(null);
  const inputBody = useRef(null);
  const inputUserId = useRef(null);

  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/posts';

    fetch(url)
      .then((data) => data.json())
      .then((data) => setFetchedPosts(data))
      .catch(() => console.log('Sorry an error occured !'));
  }, []);

  const onSubmitPost = () => {
    const post = {
      "userId": inputUserId.current.value,
      "title": inputTitle.current.value,
      "body": inputBody.current.value
    }
    setFetchedPosts([post, ...fetchedPosts])
  };

  return (
    <div>
      <div>
        <input ref={inputTitle} type="text" />
        <input ref={inputBody} type="text" />
        <input ref={inputUserId} type="text" />
        <button onClick={onSubmitPost}>Add</button>
      </div>
      <ul style={{ listStyle: 'none', width: '800px' }}>
        {fetchedPosts.map(p => (
          <Post data={p} />
        ))}
      </ul>
    </div>
  );
}

export default PostsList;
