import { useParams, useNavigate } from 'react-router-dom';
import { useState, React, useEffect } from 'react';
import { HeaderComponent } from '../../Components';
import './posts.css'

const PostsDetails = () => {
    const navigate = useNavigate(-1) 
    const params = useParams();
    const [post, setPost] = useState(null)
    console.log(params);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() =>{
        setIsLoading(true);
        setPost(null)
        setError('');
        fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
        .then((response) => response.json())
        .then((data) => setPost(data))
        .catch((err) => setError(err.message))
        .finally(() => setIsLoading(false))
      }, [])

      const onPostBack = () => navigate(`/posts`)
  return (
    <div>
      <header>
      <HeaderComponent />
      </header>
      <div className='first'>
      <p>{isLoading}'loading...'</p>
      {error && error}
      <button onClick={onPostBack}>Back</button>
      <h1>{post && JSON.stringify(post.id)}</h1>
      <p>{post && JSON.stringify(post.title)}</p>
      <p>{post && JSON.stringify(post.body)}</p>
      </div>
    </div>
  )
}

export default PostsDetails