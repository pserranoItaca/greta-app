import { FilmModel } from "@/infraestructure/models/Film";
import { UserModel } from "@/infraestructure/models/User";
import { FORM_REGEX } from "@/utils/RegExp";
import { notifications } from "@mantine/notifications";
import { FormEvent, useState } from "react";

const useUploadFilmForm = () => {
  const [loading, setLoading] = useState(false);

  const validate = (values: FilmModel) => {
    if (
      !values.title.match(FORM_REGEX.USER) ||
      !values.descript.match(FORM_REGEX.USER) ||
      !values.director.match(FORM_REGEX.USER) ||
      !values.actors.match(FORM_REGEX.USER) ||
      !values.art.match(FORM_REGEX.USER)
    ) {
      notifications.show({
        title: "Formato inválido",
        message:
          "Los datos solo pueden estar formados por letras y números y los caracteres especiales ( . - _ )",
        color: "red",
      });
      return false;
    }

    return true;
  };

  const handleUpload = async (values: FilmModel, filmFile: File) => {
    const formData = new FormData();
    formData.append("filmFile", filmFile);
    formData.append("values", JSON.stringify(values));

    console.log(formData);
    try {
      const response = await fetch("http://localhost:3010/upload", {
        method: "POST",

        body: formData,
      });

      if (response.ok) {
        const newFilm = await response.json();
        return newFilm as FilmModel;
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
    values: FilmModel,
    filmFile: File
  ) => {
    e.preventDefault();
    setLoading(true);

    if (await handleUpload(values, filmFile)) {
      notifications.show({
        title: "Registro exitoso",
        message: "Pelicula registrada con éxito",
        color: "green",
      });

      window.location.href = "/user/dashboard";
    }
  };
  return { handleSubmit, loading };
};
export default useUploadFilmForm;
