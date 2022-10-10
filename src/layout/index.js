import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { Outlet } from "react-router-dom";
import './style.scss'

const Layout = () => {
  return (
    <div className='layout'>
      <Header />
      <div className='body'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout