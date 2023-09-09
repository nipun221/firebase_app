"use client"
import React from 'react'
import { UserAuthContextProvider } from '../contexts/UserAuth'
import Home from '../components/Home'

const home1 = () => {
  return (
    <UserAuthContextProvider>
      <Home/>
    </UserAuthContextProvider>
  )
}

export default home1