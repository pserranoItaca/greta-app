import { GretaText, TextInputButton } from "@/components";
import { Container } from "@mui/material";
import PopCorn from "@/components/icons/PopCorn";
import styles from "./SectionTittle.module.scss";
import Link from "next/link";

const SectionTitle = () => {
  const mapText = [
    "Disfruta totalmente GRATIS del todo el catálogo de GRETA >",
    "Disfruta totalmente GRATIS del todo el catálogo de GRETA >",
    "Disfruta totalmente GRATIS del todo el catálogo de GRETA >",
  ];
  return (
    <>
      <div className={styles.general}>
        <div className={styles.general_text}>
          <GretaText
            content={
              "DISFRUTA DEL MEJOR CINE Y LAS MEJORES SERIES INDEPENDIENTES"
            }
            variant={"title"}
            color={"light"}
          />
          <GretaText
            content={"No sabes lo que te espera :)"}
            variant={"subtitle"}
            color={"light"}
          />
        </div>
        <div className={styles.general_email}>
          <TextInputButton
            textVariant="subtitle"
            placeholder="Dirección de correo"
            href="./login"
            textButton="Descubrir >"
            title="¡Empieza a disfrutar GRATIS de historias independientes!"
            textColor={"dark"}
            variant={"outlined"}
          />
        </div>
      </div>
      <div className={styles.popcorn}>
        <div className={styles.popcorn_icon}>
          <PopCorn />
        </div>
        <div className={styles.popcorn_text}>
          {mapText.map((item, index) => (
            <Link className={styles.popcorn_text_link} href={""} key={index}>
              {item}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
export default SectionTitle;
