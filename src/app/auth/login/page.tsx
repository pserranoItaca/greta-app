"use client";

import LoginForm from "./components/LoginForm";

const LoginPage = () => {
  const identified = localStorage.getItem("user");
  if (identified) {
    window.location.href = "/films";
  }
  return <LoginForm></LoginForm>;
};
export default LoginPage;
