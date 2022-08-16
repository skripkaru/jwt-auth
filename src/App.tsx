import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/login/LoginPage'
import HomePage from './pages/home/HomePage'
import RegisterPage from './pages/register/RegisterPage'
import { useTypedSelector } from './hooks/useTypedSelector'

const App = () => {
  const { isLoggedIn } = useTypedSelector((state) => state.auth)

  return (
    <Router>
      <Routes>
        <Route path="/" element={isLoggedIn ? <HomePage /> : <LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  )
}

export default App
