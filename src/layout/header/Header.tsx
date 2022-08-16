import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useTypedDispatch } from '../../hooks/useTypedDispatch'
import { setIsLoggedIn } from '../../store/slices/auth'

const Header = () => {
  const { isLoggedIn } = useTypedSelector((state) => state.auth)
  const navigate = useNavigate()
  const dispatch = useTypedDispatch()

  const handleLogout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    dispatch(setIsLoggedIn(false))
    localStorage.removeItem('login')
    navigate('/login')
  }

  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Logo
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              {isLoggedIn ? (
                <li className="nav-item">
                  <Link className="nav-link" to="/" onClick={handleLogout}>
                    Logout
                  </Link>
                </li>
              ) : (
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
