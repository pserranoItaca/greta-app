import { Button, PasswordInput, TextInput, Title } from "@mantine/core";
import { useState } from "react";
import { IconLock } from "@tabler/icons-react";
import { UserModel } from "@/infraestructure/models/User";
import styles from "./UpdateUserForm.module.scss";

const UpdateUserForm = () => {
  const [values, setValues] = useState<UserModel>({
    id: "",
    email: "",
    user: "",
    passOne: "",
    passTwo: "",
  });
  return (
    <form className={styles.updateForm} action="">
      <Title order={3}>editar perfil</Title>
      <TextInput
        leftSectionPointerEvents="none"
        label="Nuevo nombre de usuario"
        placeholder="Nombre de usuario"
        classNames={{ root: styles.root }}
        name="user"
        onChange={(e) => setValues({ ...values, user: e.target.value })}
        required
      />
      <PasswordInput
        label="Contraseña"
        name="passOne"
        placeholder="Contraseña"
        leftSection={<IconLock />}
        classNames={{ root: styles.root }}
        onChange={(e) => setValues({ ...values, passOne: e.target.value })}
        required
      />
      <PasswordInput
        label="Repita su contraseña"
        name="passTwo"
        placeholder="Repita su contraseña"
        leftSection={<IconLock />}
        classNames={{ root: styles.root }}
        onChange={(e) => setValues({ ...values, passTwo: e.target.value })}
        required
      />
      <Button>Actualizar mi perfil</Button>
    </form>
  );
};
export default UpdateUserForm;
