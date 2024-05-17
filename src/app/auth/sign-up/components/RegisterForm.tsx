"use client";

import { useState } from "react";
import { UserModel } from "@/infraestructure/models/User";
import Link from "next/link";
import styles from "./RegisterForm.module.css";

const RegisterForm = () => {
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
        <h1 className={styles.title}>Aquí empieza tu aventura!</h1>

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
        <input
          className={styles.form_pass}
          type="password"
          id="pass"
          placeholder="Repita su contraseña"
          onChange={(e) => {
            setUser({ ...user, secPass: e.target.value });
            setErr(false);
          }}
        />
        <span>¿Has olvidado tu contraseña?</span>

        <input
          className={styles.form_submit}
          type="button"
          value={"Entrar"}
          // onClick={(e) => handleLogin(e.nativeEvent)}
        />
        {err && <p style={{ color: "red" }}>Error, datos inválidos</p>}
      </form>
      <span>
        ¿Ya tienes cuenta? <Link href="../../auth/login">Accede</Link>{" "}
      </span>
    </div>
  );
};
export default RegisterForm;
