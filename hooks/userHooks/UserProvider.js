import React, { useContext } from 'react'
import { useUserId } from '@nhost/nextjs'
import { useQuery } from '@apollo/client'

import { GET_USER_QUERY } from '../../queries/profile/user'

const UserContext = React.createContext(null)

export function UserProvider({ children = null }) {
  const id = useUserId()
  // highlight-start
  const { loading, error, data } = useQuery(GET_USER_QUERY, {
    variables: { id },
    skip: !id
  })
  const user = data?.user
  // highlight-end

  // highlight-start
  if (error) {
    return <p>Something went wrong. Try to refresh the page.</p>
  }
  if (loading) {
    return null
  }
  // highlight-end

  return <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
}

export function useUserContext() {
  return useContext(UserContext)
}