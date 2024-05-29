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
    console.log(credential);
    return credential;
  };

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>,
    values: UserModel
  ) => {
    e.preventDefault();

    const credetial = await handleLogin(values);
    if (credetial[0] !== undefined) {
      localStorage.setItem("user", credetial[0].email);
      window.location.href = "/films";
    } else {
      notifications.show({
        title: "Datos inválidos",
        message:
          "No se ha podido verificar su identidad, revise sus datos o intentelo de nuevo mas tarde",
        color: "red",
      });
      return;
    }
  };

  return { handleSubmit };
};
export default userLoginForm;
