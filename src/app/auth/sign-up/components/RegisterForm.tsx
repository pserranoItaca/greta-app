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
import styles from "./RegisterForm.module.scss";
import { useState } from "react";
import { UserModel } from "@/infraestructure/models/User";
import useRegisterForm from "./useRegisterForm";

const RegisterForm = () => {
  const [values, setValues] = useState<UserModel>({
    id: "",
    email: "",
    user: "",
    pass: "",
    passAgain: "",
  });

  const { handleSubmit, loading } = useRegisterForm();

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
          <Image
            src={logo.default.src}
            className={styles.header_logo}
            alt={"GRETA!"}
            width={200}
            height={80}
          />
          <Title>Aquí empieza tu aventura</Title>
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
            name="user"
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
