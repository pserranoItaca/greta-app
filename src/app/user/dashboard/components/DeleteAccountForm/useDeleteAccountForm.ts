import { notifications } from "@mantine/notifications";
import { useState } from "react";

const useDeleteAccountForm = () => {
  const [loading, setLoading] = useState(false);

  const handleDelete = async (id: string) => {
    setLoading(true);
    try {
      console.log;
      const response = await fetch(`http://localhost:3010/auth/delete/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        localStorage.setItem("user", "");
        localStorage.setItem("user_id", "");
        localStorage.setItem("avatar", "");

        window.location.href = "/";
      } else {
        const errorResponse = await response.json();
        notifications.show({
          title: "Error de BORRADO",
          message: errorResponse.message || "No se pudo eliminar el usuario",
          color: "red",
        });
        return setLoading(false);
      }
    } catch (error) {
      notifications.show({
        title: "Error",
        message:
          "Se ha producido un error, por favor intente de nuevo más tarde",
        color: "red",
      });
      return setLoading(false);
    }
  };
  return { handleDelete, loading };
};
export default useDeleteAccountForm;
