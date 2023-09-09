"use client"
import { BrowserRouter } from "react-router-dom"
import { UserAuthContextProvider } from "../contexts/UserAuth"
import Signup from "../components/signup"

const SignUp = () => {
  return (
    <UserAuthContextProvider>
        <Signup/>
    </UserAuthContextProvider>
  )
}

export default SignUp