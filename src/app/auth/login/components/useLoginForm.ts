"use client";

import { UserModel } from "@/infraestructure/models/User";
import { FORM_REGEX } from "@/utils/RegExp";
import { notifications } from "@mantine/notifications";
import { redirect } from "next/navigation";

import { FormEvent } from "react";

const userLoginForm = () => {
  const validate = (values: UserModel) => {
    if (!values.pass.match(FORM_REGEX.PASS)) {
      notifications.show({
        title: "Contraseña inválida",
        message: "Parámetros no admitidos",
        color: "red",
      });
      return false;
    }

    return true;
  };

  const handleLogin = async (values: UserModel) => {
    const credential = await fetch("http://localhost:3010/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    }).then((res) => res.json());
    return credential;
  };

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>,
    values: UserModel
  ) => {
    e.preventDefault();
    if (!validate(values)) return;

    const credetial = await handleLogin(values);
    if (credetial) {
      localStorage.setItem("user", credetial[0].email);
      window.location.href = "/films";
    }
  };

  return { handleSubmit };
};
export default userLoginForm;
