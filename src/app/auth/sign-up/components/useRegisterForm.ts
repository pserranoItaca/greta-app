import { UserModel } from "@/infraestructure/models/User";
import { FORM_REGEX } from "@/utils/RegExp";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { FormEvent } from "react";

const useRegisterForm = () => {
  const validate = (values: UserModel) => {
    //   if (!values.email.match(FORM_REGEX.EMAIL)) {
    //     notifications.show({
    //       title: "Email incorrecto",
    //       message: "Por favor, intruduce un correo electrónico válido",
    //       color: "red",
    //     });
    //     return false;
    //   }
    if (!values.user.match(FORM_REGEX.USER)) {
      notifications.show({
        title: "Usuario incorrecto",
        message:
          "El nombre de usuario solo puede estar formado por letras y números y los caracteres especiales ( . - _ )",
        color: "red",
      });
      return false;
    }
    if (!values.passOne.match(FORM_REGEX.PASS)) {
      notifications.show({
        title: "Contraseña inválida",
        message:
          "La contraseña debe contener entre 5 y 15 caracteres y debe contener al menos una letra, un número, un carácter especial ",
        color: "red",
      });
      return false;
    }

    if (values.passOne !== values.passTwo) {
      notifications.show({
        title: "Error en las contraseñas",
        message: "Por favor, introduzca dos contraseñas que coincidan",
        color: "red",
      });
      return false;
    }

    return true;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>, values: UserModel) => {
    e.preventDefault();
    if (!validate(values)) return;
    alert("enviado");
  };

  return { handleSubmit };
};

export default useRegisterForm;
