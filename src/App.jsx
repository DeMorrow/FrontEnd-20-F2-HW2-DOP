import React from 'react'
import { Main, Header, Users, Posts, UsersDetails, PostsDetails } from './Pages' 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


const App = () => {
  return (
    <Router>
        <Routes>
            <Route element={<Header />} path='/'/>
            <Route element={<Main />} path='/'/>
            <Route element={<Users />} path='/users'/>
            <Route element={<Posts />} path='/posts'/>
            <Route element={<UsersDetails />} path='/users/:id'/>
            <Route element={<PostsDetails />} path='/posts/:id'/>
        </Routes>
    </Router>
  )
}

export default App