import { Button, PasswordInput, Radio, TextInput, Title } from "@mantine/core";
import { useState } from "react";
import { IconLock } from "@tabler/icons-react";
import { UserModel } from "@/infraestructure/models/User";
import Image from "next/image";
import styles from "./UpdateUserForm.module.scss";
import {
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  avatar6,
} from "@/app/auth/sign-up/avatars";
import useUpdateUser from "./useUpdateUser";

const UpdateUserForm = () => {
  const { handleSubmit, loading } = useUpdateUser();

  const [values, setValues] = useState<UserModel>({
    avatar: "1",
    email: "",
    username: "",
    pass: "",
    passAgain: "",
    id: 0,
    active: true,
    deleted: false,
    created_at: "",
    updated_at: "",
    deleted_at: null,
  });
  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, avatar: name });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  return (
    <form
      className={styles.updateForm}
      onSubmit={(e) => {
        handleSubmit(e, values);
      }}
    >
      <Title order={3}>editar perfil</Title>
      <Radio.Group>
        <div>
          <div className={styles.avatars}>
            <div className={styles.avatar}>
              <Image width={100} height={100} src={avatar1} alt={"logo"} />
              <Radio
                name="1"
                value="1"
                onChange={(e) => handleAvatarChange(e)}
              />
            </div>
            <div className={styles.avatar}>
              <Image width={100} height={100} src={avatar2} alt={"logo"} />
              <Radio
                name="2"
                value="2"
                onChange={(e) => handleAvatarChange(e)}
              />
            </div>{" "}
            <div className={styles.avatar}>
              <Image width={100} height={100} src={avatar3} alt={"logo"} />
              <Radio
                name="3"
                style={{ marginTop: "10px" }}
                value="3"
                onChange={(e) => handleAvatarChange(e)}
              />
            </div>
          </div>
          <div className={styles.avatars}>
            <div className={styles.avatar}>
              <Image width={100} height={100} src={avatar4} alt={"logo"} />
              <Radio
                name="4"
                value="4"
                onChange={(e) => handleAvatarChange(e)}
              />
            </div>
            <div className={styles.avatar}>
              <Image width={100} height={100} src={avatar5} alt={"logo"} />
              <Radio
                name="5"
                value="5"
                onChange={(e) => handleAvatarChange(e)}
              />
            </div>{" "}
            <div className={styles.avatar}>
              <Image width={100} height={100} src={avatar6} alt={"logo"} />
              <Radio
                name="6"
                value="6"
                onChange={(e) => handleAvatarChange(e)}
              />
            </div>
          </div>
        </div>
      </Radio.Group>
      <TextInput
        leftSectionPointerEvents="none"
        label="Nuevo nombre de usuario"
        placeholder="Nombre de usuario"
        classNames={{ root: styles.root }}
        name="username"
        onChange={(e) => handleAvatarChange(e)}
        required
      />
      <PasswordInput
        label="Contraseña"
        name="pass"
        placeholder="Contraseña"
        leftSection={<IconLock />}
        classNames={{ root: styles.root }}
        onChange={(e) => handleAvatarChange(e)}
        required
      />
      <PasswordInput
        label="Repita su contraseña"
        name="passAgain"
        placeholder="Repita su contraseña"
        leftSection={<IconLock />}
        classNames={{ root: styles.root }}
        onChange={(e) => handleAvatarChange(e)}
        required
      />
      <Button>Actualizar mi perfil</Button>
    </form>
  );
};
export default UpdateUserForm;
