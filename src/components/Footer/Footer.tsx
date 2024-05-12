import Link from "next/link";
import styles from "./Footer.module.scss";

const Footer = () => {
  const loveGreta = " GRETA <3";
  return (
    <footer className={styles.footer}>
      <div>
        <div className={styles.section_top}>
          <div className={styles.section_contact}>
            <span>¿Quieres hablar con nosotros?</span>
            <span>serranoandrespablo@gmail.com</span>
          </div>
          <div className={styles.section_top_contact_brand}>
            <span>{loveGreta}</span>
          </div>
        </div>
      </div>
      <div className={styles.redirect}>
        <div className={styles.colum}>
          <ul>
            <li>
              <Link href="">Preguntas frecuentes</Link>
            </li>
            <li>
              <Link href="">Colabora con GRETA</Link>
            </li>
            <li>
              <Link href="">Información corporativa</Link>
            </li>
            <li>
              <Link href="">Avisos legales</Link>
            </li>
          </ul>
        </div>
        <div className={styles.colum}>
          {" "}
          <ul>
            <li>
              <Link href="">¿Quien es GRETA?</Link>
            </li>
            <li>
              <Link href="">Talento GRETA</Link>
            </li>
            <li>
              <Link href="">Apoyar a los creadores</Link>
            </li>
          </ul>
        </div>
        <div className={styles.colum}>
          <ul>
            <li>
              <Link href="">Blog de GRETA</Link>
            </li>
            <li>
              <Link href="">Privacidad</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.bottom}>
        <span>Escucha eh, todos los derechos reservados GRETA</span>
      </div>
    </footer>
  );
};
export default Footer;
