import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useLoginUserMutation } from '../../services/authService'
import { IUser } from '../../types/auth'
import Layout from '../../layout/Layout'
import { useTypedDispatch } from '../../hooks/useTypedDispatch'
import { setIsLoggedIn } from '../../store/slices/auth'

function LoginPage() {
  const [formData, setFormData] = useState<IUser>({
    email: '',
    password: '',
  })
  const navigate = useNavigate()
  const [loginUser, { data, isLoading, error }] = useLoginUserMutation()
  const dispatch = useTypedDispatch()

  useEffect(() => {
    if (data && data.accessToken) {
      dispatch(setIsLoggedIn(true))
      localStorage.setItem(
        'login',
        JSON.stringify({
          token: data.accessToken,
        })
      )
      navigate('/')
    }
  }, [data])

  const handleSubmit = async (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault()
    await loginUser(formData)
    setFormData({
      email: '',
      password: '',
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <Layout>
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>Login user error</h1>}
      <h1 className="mb-3 text-center">Login</h1>
      <form onSubmit={handleSubmit} className="border rounded p-4">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <div className="input-group mb-3">
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
            placeholder="Email"
          />
        </div>
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <div className="input-group mb-4">
          <input
            id="password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="form-control"
            placeholder="Password"
          />
        </div>
        <button className="btn btn-primary px-5 mb-3" type="submit">
          Login
        </button>
        <div>
          Don`t have an account, then please do{' '}
          <Link to="/register">Register</Link>.
        </div>
      </form>
    </Layout>
  )
}

export default LoginPage
