import React, { FC } from 'react'
import { IUser } from '../../types/user'
import { userAPI } from '../../services/userService'
import Layout from '../../layout/Layout'
import UserItem from '../../components/userItem/UserItem'

const HomePage: FC = () => {
  const { data: users, error, isLoading } = userAPI.useGetUsersQuery(25)
  const [createUser] = userAPI.useCreateUserMutation()
  const [updateUser] = userAPI.useUpdateUserMutation()
  const [deleteUser] = userAPI.useDeleteUserMutation()

  const handleCreate = async () => {
    const username = prompt()
    await createUser({ username, email: username } as IUser)
  }

  const handleRemove = (user: IUser) => {
    deleteUser(user)
  }

  const handleUpdate = (user: IUser) => {
    updateUser(user)
  }

  return (
    <Layout>
      <h1 className="mb-3 text-center">Contacts</h1>
      <ul className="list-group mb-4">
        {users &&
          users.map((user) => (
            <UserItem
              key={user.id}
              user={user}
              remove={handleRemove}
              update={handleUpdate}
            />
          ))}
      </ul>
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>User loading error</h1>}
      <button className="btn btn-primary px-5" onClick={handleCreate}>
        Create
      </button>
    </Layout>
  )
}

export default HomePage
