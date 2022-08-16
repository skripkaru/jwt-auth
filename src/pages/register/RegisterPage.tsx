import React, { useState } from 'react'
import Layout from '../../layout/Layout'
import { Link, useNavigate } from 'react-router-dom'
import { useRegisterUserMutation } from '../../services/authService'
import { IUser } from '../../types/auth'

function RegisterPage() {
  const [formData, setFormData] = useState<IUser>({
    username: '',
    email: '',
    password: '',
  })
  const navigate = useNavigate()
  const [registerUser, { isLoading, error }] = useRegisterUserMutation()

  const handleSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault()
    registerUser(formData)
    setFormData({
      username: '',
      email: '',
      password: '',
    })
    navigate('/login')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <Layout>
      <h1 className="mb-3 text-center">Register</h1>
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>Register user error</h1>}
      <form onSubmit={handleSubmit} className="border rounded p-4">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <div className="input-group mb-3">
          <input
            id="name"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="form-control"
            placeholder="Name"
          />
        </div>
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
          Register
        </button>
        <div>
          Already have an account then please <Link to="/login">Login</Link>
        </div>
      </form>
    </Layout>
  )
}

export default RegisterPage
