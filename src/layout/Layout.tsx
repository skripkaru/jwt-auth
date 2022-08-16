import React from 'react'
import Header from './header/Header'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = (props) => {
  const { children } = props

  return (
    <div className="layout">
      <Header />
      <main className="main pt-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col col-xs-5 col-md-8 col-lg-5">{children}</div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Layout
