"use client";

import { UserModel } from "@/infraestructure/models/User";
import { FORM_REGEX } from "@/utils/RegExp";
import { notifications } from "@mantine/notifications";
import { redirect } from "next/navigation";

import { FormEvent, useState } from "react";

const userLoginForm = () => {
  const [loading, setLoading] = useState(false);

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
    try {
      const response = await fetch("http://localhost:3010/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        const credential = await response.json();
        return credential;
      } else {
        notifications.show({
          title: "Datos inválidos",
          message:
            "No se ha podido verificar su identidad, revise sus datos o intentelo de nuevo más tarde",
          color: "red",
        });
        return null;
      }
    } catch (error) {
      console.error("Error during login", error);
      notifications.show({
        title: "Error",
        message:
          "Se ha producido un error, por favor intente de nuevo más tarde",
        color: "red",
      });
      return null;
    }
  };

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>,
    values: UserModel
  ) => {
    e.preventDefault();

    if (!validate(values)) return;
    setLoading(true);

    const credential = await handleLogin(values);
    if (credential && credential.email) {
      localStorage.setItem("user", credential);
      setLoading(false);

      window.location.href = "/films";
    }
  };

  return { handleSubmit, loading };
};
export default userLoginForm;
