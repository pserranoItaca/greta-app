"use client";

import {
  Checkbox,
  PasswordInput,
  TextInput,
  Title,
  Text,
  Button,
  Radio,
  Group,
} from "@mantine/core";
import { IconAt, IconLock } from "@tabler/icons-react";
import Link from "next/link";
import {
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  avatar6,
} from "../avatars/index";
import Image from "next/image";
import styles from "./RegisterForm.module.scss";
import { FormEvent, useState } from "react";
import { UserModel } from "@/infraestructure/models/User";
import useRegisterForm from "./useRegisterForm";

const RegisterForm = () => {
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
  const { handleSubmit, loading } = useRegisterForm();

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
    <div className={styles.register}>
      <div className={styles.register_form}>
        <form action="" onSubmit={(e) => handleSubmit(e, values)}>
          <Title>Aquí empieza tu aventura</Title>
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
            type="email"
            name="email"
            leftSectionPointerEvents="none"
            leftSection={<IconAt />}
            label="Correo electrónico"
            placeholder="Correo electrónico"
            classNames={{ root: styles.root }}
            onChange={(e) => handleChange(e)}
            required
          />
          <TextInput
            leftSectionPointerEvents="none"
            label="Nombre de usuario"
            placeholder="Nombre de usuario"
            classNames={{ root: styles.root }}
            name="username"
            onChange={(e) => handleChange(e)}
            required
          />
          <PasswordInput
            label="Contraseña"
            name="pass"
            placeholder="Contraseña"
            leftSection={<IconLock />}
            classNames={{ root: styles.root }}
            onChange={(e) => handleChange(e)}
            required
          />
          <PasswordInput
            label="Repita su contraseña"
            name="passAgain"
            placeholder="Repita su contraseña"
            leftSection={<IconLock />}
            classNames={{ root: styles.root }}
            onChange={(e) => handleChange(e)}
            required
          />
          <Checkbox
            label="Acepto los términos y condiciones de privacidad"
            required
          />
          <Button type="submit" variant="light" loading={loading}>
            Regístrame!
          </Button>
        </form>
        <Text>
          ¿Asi que ya tienes cuenta? -{" "}
          <Link href={"../auth/login"}> Acceder </Link>
        </Text>
      </div>
      <br />
      <br />
    </div>
  );
};
export default RegisterForm;
