"use client"
import Login from './components/Login'
import { UserAuthContextProvider } from './contexts/UserAuth'

export default function Home() {
  return (
    <UserAuthContextProvider>
        <Login/>
    </UserAuthContextProvider>
  )
}
