import { Button } from "@mantine/core";
import { FormEvent } from "react";
import useDeleteAccountForm from "./useDeleteAccountForm";

const DeleteAccountForm = () => {
  const { handleDelete, loading } = useDeleteAccountForm();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleDelete(localStorage.getItem("user_id")!);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <h2 style={{ color: "#4e5152" }}>¿Seguro que deseas borrar la cuenta?</h2>
      <Button variant="light" size="lg" type="submit" loading={loading}>
        Si, estoy seguro
      </Button>
    </form>
  );
};
export default DeleteAccountForm;
