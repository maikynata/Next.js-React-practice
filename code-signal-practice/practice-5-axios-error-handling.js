import { useState, useEffect } from 'react';
import axios from 'axios';

function SpacePosts() {
  // TODO: Define the state variable for storing blog posts and any potential errors
  const [blogPosts, setBlogPosts] = useState([]);
  const [error, setError] = useState(false);
  const [errorReponse, setErrorResponse] = useState(null);

  useEffect(() => {
    // TODO: Fetch space posts using async/await pattern within this useEffect hook
    // URL: https://api-regional.codesignalcontent.com/posting-application-2/posts/
    // Save them to state and handle any errors that may occur
    async function fetchBlogPosts() {
      try {
        const response = await axios.get('https://api-regional.codesignalcontent.com/posting-application-2/posts/')
        setBlogPosts(response.data)
      } catch (error) {
        setError(true);
        setErrorResponse(error.message);
      }
    }
    fetchBlogPosts();
  }, []);

  // TODO: Optionally handle displaying any errors that might have occurred during fetching
  // TODO: Return JSX to display space blog posts, specifically post.text and post.likesCount
  return (
    <>
    { error ? <h1>An error occurred: {errorReponse}</h1> :
      blogPosts.map(post => (
      <div key={post.id}>
        <p>Post Text: {post.text}</p>
        <p>Likes: {post.likesCount}</p>
      </div>
    ))}
    </>
  )
}

export default SpacePosts;