import { NextPage } from 'next'
import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import useWindowSize from './utils/windowSize'

const Layout: NextPage = ({ children }) => {
  const size = useWindowSize()

  return (
    <div>
      <Header />
      {size.width >= 768 ? <Navbar /> : null}
      {children}
    </div>
  )
}

export default Layout
