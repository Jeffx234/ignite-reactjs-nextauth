import { ReactNode } from 'react'

export type User = {
  email: string
  permissions: string[]
  roles: string[]
}

export type ISignInCredentials = {
  email: string
  password: string
}

export type IAuthContextData = {
  signIn(credentials: ISignInCredentials): Promise<void>
  user: User
  isAuthenticated: boolean
}

export type IAuthProviderProps = {
  children: ReactNode;
}
