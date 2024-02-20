import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import HeaderComponent from '../HeaderComponent/HeaderComponent';


const UsersList = () => {
  const [usersList, setUsersList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() =>{
    setIsLoading(true);
    setError('');
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => setUsersList(data))
    .catch((err) => setError(err.message))
    .finally(() => setIsLoading(false))
  }, [])

  return (
    <>
    <header>
      <HeaderComponent />
    </header>
  <ul>
    {isLoading && 'loading...'}
    {error && error}
    {usersList.length &&
      usersList.map((user) => {
        const onUserClick = () => navigate(`/users/${user.id}`)

        return (
          <li key={`user-${user.id}`}>
            {user.name} {user.email}
            <button onClick={onUserClick}>More...</button>
          </li>
        )
      })}
  </ul>
  <Outlet />
  </>
  )
}

export default UsersList