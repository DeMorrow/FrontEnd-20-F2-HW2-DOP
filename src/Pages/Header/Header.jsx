import React from 'react'
import { HeaderComponent } from '../../Components'
import { Outlet } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <header>
    <HeaderComponent/>
        </header>
        <Outlet />
    </>
  )
}

export default Header