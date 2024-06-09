"use client";

import RegisterForm from "./components/RegisterForm";

const RegisterUser = () => {
  const identified = localStorage.getItem("user");
  if (identified) {
    window.location.href = "/films";
  }
  return <RegisterForm></RegisterForm>;
};
export default RegisterUser;
