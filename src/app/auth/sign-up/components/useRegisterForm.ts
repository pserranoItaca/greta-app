import { UserModel } from "@/infraestructure/models/User";
import { FORM_REGEX } from "@/utils/RegExp";
import { notifications } from "@mantine/notifications";
import { FormEvent, useState } from "react";

const useRegisterForm = () => {
  const [loading, setLoading] = useState(false);

  const validate = (values: UserModel) => {
    if (!values.username.match(FORM_REGEX.USER)) {
      notifications.show({
        title: "Usuario incorrecto",
        message:
          "El nombre de usuario solo puede estar formado por letras y números y los caracteres especiales ( . - _ )",
        color: "red",
      });
      return false;
    }
    if (!values.pass.match(FORM_REGEX.PASS)) {
      notifications.show({
        title: "Contraseña inválida",
        message:
          "La contraseña debe contener entre 5 y 15 caracteres y debe contener al menos una letra, un número, un carácter especial ",
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
  const redirect = () => {
    window.location.href = "/films";
  };

  const handleRegister = async (
    values: UserModel
  ): Promise<UserModel | null> => {
    try {
      const response = await fetch("http://localhost:3010/auth/sign-up", {
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

    if (!validate(values)) return setLoading(false);
    setLoading(true);

    const credential = await handleRegister(values);

    if (credential) {
      notifications.show({
        title: "Registro exitoso",
        message: "Usuario registrado con éxito",
        color: "green",
      });
      localStorage.setItem("user", credential.email);
      localStorage.setItem("user_id", credential.id);
      localStorage.setItem("avatar", credential.avatar);

      redirect();
    } else {
      setLoading(false);
    }
  };

  return { handleSubmit, loading };
};

export default useRegisterForm;
