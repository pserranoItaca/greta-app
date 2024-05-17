import Image from "next/image";
import Link from "next/link";
import styles from "./HomeHeader.module.scss";
import { ReactNode, Suspense } from "react";
import GretaButton from "@/components/shared/Button/Button";

const textoBoton: React.ReactNode = "Iniciar sesion";

const HomeHeader = () => {
  console.log("header!");
  return (
    <div className={styles.top}>
      <Suspense fallback={"holi"}>
        <Image
          src="/brand/logoWeb.png"
          className={styles.image}
          alt={"GRETA!"}
          width={200}
          height={80}
        />
        <div className={styles.button}>
          <GretaButton>Iniciar sesion</GretaButton>
        </div>
      </Suspense>
    </div>
  );
};
export default HomeHeader;
