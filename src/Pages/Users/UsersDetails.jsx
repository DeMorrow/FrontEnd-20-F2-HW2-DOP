import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';

const UsersDetails = () => {
    const params = useParams();
    const [user, setUser] = useState(null)
    console.log(params);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
  
    useEffect(() =>{
      setIsLoading(true);
      setUser(null)
      setError('');
      fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false))
    }, [])
  
    return (
    <ul>
      {isLoading && 'loading...'}
      {error && error}
      <p>{user && JSON.stringify(user)}</p>
    </ul>
    )
    }


export default UsersDetails