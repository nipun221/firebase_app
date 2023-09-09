"use client"
import { Container } from 'postcss'
import Login from './components/Login'
import { Col, Row } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom'
import { UserAuthContextProvider } from './contexts/UserAuth'

export default function Home() {
  return (
    <UserAuthContextProvider>
        <Login/>
    </UserAuthContextProvider>
  )
}
