import { NextPage } from 'next'
import React from 'react'
import Header from './Header'

const Layout: NextPage = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

export default Layout
