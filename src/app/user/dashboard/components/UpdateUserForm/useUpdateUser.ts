import { UserModel } from "@/infraestructure/models/User";
import { FORM_REGEX } from "@/utils/RegExp";
import { notifications } from "@mantine/notifications";
import { FormEvent, useState } from "react";

const useUpdateUser = () => {
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
    if (values.pass !== values.passAgain) {
      notifications.show({
        title: "Error en las contraseñas",
        message: "Por favor, introduzca dos contraseñas que coincidan",
        color: "red",
      });
      return false;
    }

    return true;
  };

  const handleRegister = async (
    values: UserModel
  ): Promise<UserModel | null> => {
    try {
      console.log;
      const response = await fetch("http://localhost:3010/auth/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        const credential = await response.json();
        return credential as UserModel;
      } else {
        const errorResponse = await response.json();
        notifications.show({
          title: "Error de registro",
          message: errorResponse.message || "No se pudo registrar el usuario",
          color: "red",
        });
        return null;
      }
    } catch (error) {
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

    setLoading(true);

    if (!validate(values)) {
      return setLoading(false);
    }

    const credential = await handleRegister(values);
    console.log(credential);

    if (credential && credential.email) {
      localStorage.setItem("user", credential.email);
      localStorage.setItem("user_id", credential.id);
      localStorage.setItem("avatar", credential.avatar);

      window.location.href = "/films";
      setLoading(false);
    } else {
      setLoading(false);
      notifications.show({
        title: "Error",
        message:
          "Algo inesperado ha surgido, pongase en contacto con nosotros para solucionarlo",
        color: "red",
      });
    }
  };

  return { handleSubmit, loading };
};

export default useUpdateUser;
