import React from 'react'
import AuthLayout from '../../Layouts/AuthLayout'
import LoginForm from '../../Components/Fragments/LoginForm'

export default function Login({ user, setUser }) {


  return (
    <AuthLayout>
        <LoginForm user={user} setUser={setUser} />
    </AuthLayout>
  )
}
