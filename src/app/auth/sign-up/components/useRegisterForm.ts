import { UserModel } from "@/infraestructure/models/User";
import { FORM_REGEX } from "@/utils/RegExp";
import { notifications } from "@mantine/notifications";
import { FormEvent, useState } from "react";

const useRegisterForm = () => {
  const [loading, setLoading] = useState(false);

  const validate = (values: UserModel) => {
    if (!values.user.match(FORM_REGEX.USER)) {
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

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>,
    values: UserModel
  ) => {
    e.preventDefault();

    if (!validate(values)) return;
    try {
      await fetch("http://localhost:3010/auth/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
    } catch (error) {
      console.error(error);
      notifications.show({
        title: "Error",
        message: "No se ha podido identificar. Inténtelo de nuevo más tarde.",
        color: "red",
      });
    }
  };
  return { handleSubmit, loading };
};

export default useRegisterForm;
