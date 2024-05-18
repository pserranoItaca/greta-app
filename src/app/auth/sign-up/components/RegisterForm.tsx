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
import * as useRegister from "./useRegister";
import { logo } from "../../../../../public/brand";
import Image from "next/image";
import styles from "./RegisterForm.module.scss";
import { useState } from "react";
import { UserModel } from "@/infraestructure/models/User";

const RegisterForm = () => {
  const { handleSubmit } = useRegister;
  const [values, setValues] = useState<UserModel>({
    id: "",
    email: "",
    user: "",
    passOne: "",
    passTwo: "",
  });

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
            name="email"
            leftSectionPointerEvents="none"
            leftSection={<IconAt />}
            label="Correo electrónico"
            placeholder="Correo electrónico"
            classNames={{ root: styles.root }}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
            required
            // error={test(6)}
          />
          <TextInput
            leftSectionPointerEvents="none"
            label="Nombre de usuario"
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
          <Checkbox
            label="Acepto los términos y condiciones de privacidad"
            required
          />
          <Button type="submit" variant="light">
            Regístrame!
          </Button>
        </form>
        <Text>
          ¿Asi que ya tienes cuenta? - <Link href={"/login"}> Acceder </Link>
        </Text>
      </div>
      <br />
      <br />
    </div>
  );
};
export default RegisterForm;
