import Image from "next/image";
import styles from "./FilmsHeader.module.scss";
import Link from "next/link";
import { logo } from "../../../../../public/brand";
import { AvatarMenu } from "@/components";

const FilmsHeader = () => {
  return (
    <>
      <div className={styles.menu}>
        <div className={styles.menu_links}>
          <Image src={logo} alt={""} width={160} height={70}></Image>

          <Link href={""}>Inicio</Link>
          <Link href={""}>Peliculas</Link>
          <Link href={""}>Series</Link>
          <Link href={""}>Categorias</Link>
          <Link href={""}>Mi videoclub</Link>
        </div>
        <AvatarMenu
          options={[{ label: "Hola" }, { label: "Hola" }, { label: "Hola" }]}
        ></AvatarMenu>
      </div>
    </>
  );
};
export default FilmsHeader;
