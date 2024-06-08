"use client";

import {
  Checkbox,
  PasswordInput,
  TextInput,
  Title,
  Text,
  Button,
} from "@mantine/core";
import { IconAt, IconLock } from "@tabler/icons-react";
import Link from "next/link";
import { logo } from "../../../../../public/brand";
import Image from "next/image";
import styles from "./LoginForm.module.scss";
import { useState } from "react";
import { UserModel } from "@/infraestructure/models/User";
import userLoginForm from "./useLoginForm";
import { redirect } from "next/navigation";

const LoginForm = () => {
  const { handleSubmit, loading } = userLoginForm();
  const [values, setValues] = useState<UserModel>({
    avatar: "",
    email: "",
    username: "",
    pass: "",
    id: 0,
    active: false,
    deleted: false,
    created_at: "",
    updated_at: "",
    deleted_at: null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <div className={styles.login}>
      <div className={styles.login_form}>
        <form action="" onSubmit={(e) => handleSubmit(e, values)}>
          <Image
            src={logo.default.src}
            className={styles.header_logo}
            alt={"GRETA!"}
            width={200}
            height={80}
          />
          <Title>Bienvenido de nuevo</Title>
          <TextInput
            name="email"
            leftSectionPointerEvents="none"
            leftSection={<IconAt />}
            label="Correo electrónico"
            placeholder="Correo electrónico"
            classNames={{ root: styles.root }}
            required
            onChange={(e) => handleChange(e)}
          />

          <PasswordInput
            label="Contraseña"
            name="pass"
            placeholder="Contraseña"
            leftSection={<IconLock />}
            classNames={{ root: styles.root }}
            required
            onChange={(e) => handleChange(e)}
          />

          <Button type="submit" variant="light" loading={loading}>
            Acceder!
          </Button>
        </form>
        <Text>
          ¿Asi que no tienes cuenta? -{" "}
          <Link href={"../auth/sign-up"}> Registrarme </Link>
        </Text>
      </div>
      <br />
      <br />
    </div>
  );
};
export default LoginForm;
