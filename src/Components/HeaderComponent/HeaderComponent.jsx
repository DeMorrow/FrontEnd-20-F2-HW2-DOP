import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './headercomponent.css'

const HeaderComponent = () => {
    const location = useLocation();
    const navigate = useNavigate()
    const onBack = () => navigate(-1);

  return (
    <header>
    <nav className='nav'>
        <h1>Logo</h1>
            <p>
                <Link to='/' state={{from: location.pathname}}>Main</Link>
            </p>
            <p>
                <Link to='/users' state={{from: location.pathname}}>Users</Link>
            </p>
            <p>
                <Link to='/posts' state={{from: location.pathname}}>Posts</Link>
            </p>
            <p>
                <button className='onback' onClick={onBack}>Back</button>
            </p>
    </nav>
    <hr />
    </header>
  )
}

export default HeaderComponent