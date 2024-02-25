import React from "react";
import AuthLayout from "../../Layouts/AuthLayout";
import LoginForm from "../../Components/Fragments/LoginForm";

export default function Login({ setAuth, setUser }) {
  return (
    <>
      <AuthLayout>
        <LoginForm setAuth={setAuth} setUser={setUser} />
      </AuthLayout>
    </>
  );
}
