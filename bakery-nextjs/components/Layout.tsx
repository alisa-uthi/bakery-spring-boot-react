import { NextPage } from 'next'
import React from 'react'
import Header from './Header'
import Navbar from './Navbar'

const Layout: NextPage = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="invisible md:visible">
        <Navbar />
      </div>
      {children}
    </div>
  )
}

export default Layout
