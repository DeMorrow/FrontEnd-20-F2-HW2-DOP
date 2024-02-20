import { React, useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { HeaderComponent } from '../../Components';
import './posts.css'

const Posts = () => {
  const getshortvalue = () => {
    console.log('nothing can i do.');
  }
  getshortvalue()


  const params = useParams();
  const [postsList, setPostsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() =>{
    setIsLoading(true);
    setError('');
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((data) => setPostsList(data))
    .catch((err) => setError(err.message))
    .finally(() => setIsLoading(false))
  }, [])

  return (
    <div className='father'>
        <>
      <header>
        <HeaderComponent />
        </header>
        </>
          
    <div className='leviathan'>
      <p>{isLoading && 'Loading...'}</p>
      {error && error}
      {postsList.length && 
        postsList.map((post) => {
          const onPostClick = () => navigate(`/posts/${post.id}`)
          return (
            <div className='zero'>
            <div className='first' key={`post-${post.id}`}> 
            <h1>{post.id}</h1>
            <p>{post.title}</p>
            <p>{post.body.slice(0, 20)} <Link to={`/posts/${post.id}`}>More...</Link></p>
            <div className='img'><img src={require('../Posts/postu.png')} alt="" /></div>
            <button onClick={onPostClick}>Details</button>
            </div>
            </div>
          )
          
        })
        
      }
      
      </div>
      </div>
  )
}

export default Posts