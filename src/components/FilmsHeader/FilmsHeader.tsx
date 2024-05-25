import Image from "next/image";
import styles from "./FilmsHeader.module.scss";
import Link from "next/link";
import { logo } from "../../../public/brand";
import AvatarMenu from "@/components/shared/AvatarMenu/AvatarMenu";
import UserIcon from "../../../public/resources/icons/User";

const FilmsHeader = () => {
  return (
    <>
      <div className={styles.menu}>
        <div className={styles.menu_links}>
          <Image src={logo} alt={""} width={160} height={70}></Image>

          <Link href={"http://localhost:3000/films"}>Inicio</Link>
          <Link href={""}>Peliculas</Link>
          <Link href={""}>Series</Link>
          <Link href={""}>Categorias</Link>
          <Link href={""}>Mi videoclub</Link>
        </div>
        <AvatarMenu />
      </div>
    </>
  );
};
export default FilmsHeader;
