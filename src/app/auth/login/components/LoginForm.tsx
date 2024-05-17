"use client";

import { ChangeEvent, useState } from "react";
import Link from "next/link";
import { UserModel } from "@/infraestructure/models/User";
import { handleLogin } from "../logic/useLogin";
import styles from "./Login.module.css";

const LoginForm = () => {
  const [user, setUser] = useState<UserModel>({
    id: "",
    username: "",
    pass: "",
    secPass: "",
  });
  const [err, setErr] = useState(false);

  return (
    <div className={styles.section}>
      <form className={styles.form} action="">
        <h1 className={styles.title}>Bienvenido de nuevo!</h1>

        <input
          className={styles.form_user}
          type="email"
          placeholder="Correo electronico"
          onChange={(e) => {
            setUser({ ...user, username: e.target.value });
            setErr(false);
          }}
        />
        <input
          className={styles.form_pass}
          type="password"
          id="pass"
          placeholder="Contraseña"
          onChange={(e) => {
            setUser({ ...user, pass: e.target.value });
            setErr(false);
          }}
        />
        <span>¿Has olvidado tu contraseña?</span>

        <input
          className={styles.form_submit}
          type="button"
          value={"Entrar"}
          onClick={(e) => handleLogin(e.nativeEvent, user.username, user.pass)}
        />
        {err && <p style={{ color: "red" }}>Error, datos inválidos</p>}
      </form>
      <span>
        ¿No tienes cuenta? <Link href="../../auth/sign-up">Regístrate</Link>{" "}
      </span>
    </div>
  );
};
export default LoginForm;
